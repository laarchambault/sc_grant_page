class GrantsController < ApplicationController

    def index
        grants = Grant.limit(20) 

        render json: grants
    end

    def filter
        def categories_selected
            params[:categories] && params[:categories].length > 0
        end

        def states_selected
            params[:states] && params[:states].length > 0
        end
        @all_grants = []

        ##############################################
        ##  helper methods for querying
                def add_grants_to_all(grants)
                    grants.each do |grant|
                        @all_grants.push(grant)
                    end
                    @all_grants = @all_grants.uniq
                end
            
                def query_by_categories(cat_id)
                    grants = Grant.where(category_id: cat_id)
                end
            
                def query_by_state(st)
                    foundations = Foundation.where(state: st)
                    grants = foundations.map do |foundation|
                        foundation.grants
                    end
                    grants.flatten
                end
            
                def map_states_to_query(states)
                    state_abbrs = states.map do |state|
                        state.split(', ')[1]
                    end
                    state_grants = []
                    state_abbrs.each do |abbr|
                        state_grants.push(query_by_state(abbr))
                    end
                    state_grants
                end
        #################################################


        if categories_selected() && states_selected()
            category_grants = []
            params[:categories].each do |category_id|
                category_grants.push(query_by_categories(category_id))
            end
            category_grants = category_grants.flatten
            state_grants = map_states_to_query(params[:states])
            state_grants = state_grants.flatten
            grants = category_grants & state_grants
            add_grants_to_all(grants)
        elsif categories_selected()
            params[:categories].each do |category|
                grants = query_by_categories(category)
                add_grants_to_all(grants)
            end
        elsif states_selected()
            grants = map_states_to_query(params[:states])
            grants = grants.flatten
            add_grants_to_all(grants)
        end
        #sort alphabetically by foundation name (below doesn't work if any names are nil)
        # @all_grants = @all_grants.sort_by { |grant| grant.foundation[:foundation_name]}
        render json: @all_grants
    end
end

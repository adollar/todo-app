import React, {Component} from 'react';
import FilterLink from "../containers/filter-link";

export default class Footer extends Component
{
    render() {
        return (
            <div>
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {' '}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {' '}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </div>
        );
    }
}
import React from 'react';
import PlanGroupService from './PlanGroupService';

class PlanGroupComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            planGroups:[]
        }
    }

    componentDidMount(){
        PlanGroupService.getPlanGroups().then((response) => {
            this.setState({ planGroups: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Plan Group List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> Plan Group Id</td>
                        <td> Plan Group</td>
                        <td> Description</td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.planGroups.map(
                            planGroup =>
                                <tr key = {planGroup.id}>
                                    <td> {planGroup.id}</td>
                                    <td> {planGroup.planGroup}</td>
                                    <td> {planGroup.planGroupDesc}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default PlanGroupComponent

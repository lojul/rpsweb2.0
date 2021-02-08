import React, { Component } from 'react'
import MemberService from './MemberService'

class ViewMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            member: {}
        }
    }

    componentDidMount(){
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Member Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.member.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.member.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.member.address }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMemberComponent

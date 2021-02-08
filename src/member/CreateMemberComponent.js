import React, { Component } from 'react'
import MemberService from "./MemberService";

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            address: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateMember = this.saveOrUpdateMember.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MemberService.getMemberById(this.state.id).then( (res) =>{
                let member = res.data;
                this.setState({firstName: member.firstName,
                    lastName: member.lastName,
                    address : member.address
                });
            });
        }
    }
    saveOrUpdateMember = (e) => {
        e.preventDefault();
        let member = {firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address};
        console.log('member => ' + JSON.stringify(member));

        // step 5
        if(this.state.id === '_add'){
            MemberService.createMember(member).then(res =>{
                this.props.history.push('/members');
            });
        }else{
            MemberService.updateMember(member, this.state.id).then( res => {
                this.props.history.push('/members');
            });
        }
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.history.push('/members');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Member</h3>
        }else{
            return <h3 className="text-center">Update Member</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateMember}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateMemberComponent

import React, {Component} from 'react'
import MemberService from "./MemberService";

class ListMemberComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            members: []
        }

        this.addMember = this.addMember.bind(this);
        this.editMember = this.editMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
    }

    deleteMember(id) {
        MemberService.deleteMember(id).then(res => {
           this.setState({members: this.state.members.filter(member => member.id !== id)});
        });
    }

    viewMember(id){
        this.props.history.push(`/view-member/${id}`);
    }

    editMember(id){
        this.props.history.push(`/add-member/${id}`);
    }

    addMember(){
        this.props.history.push('/add-member/_add');
    }

    componentDidMount(){
        MemberService.getMembers().then((res) => {
            this.setState({ members: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Member List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMember}> Add Members</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> ID </th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Address</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.members.map(
                                member =>
                                    <tr key = {member.id}>
                                        <td> {member.id} </td>
                                        <td> {member.firstName} </td>
                                        <td> {member.lastName}</td>
                                        <td> {member.address}</td>
                                        <td>
                                            <button onClick={ () => this.editMember(member.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMember(member.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewMember(member.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListMemberComponent


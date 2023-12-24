export default function User({user}){
    // console.log(user)
    const {name, email} = user;

    const separate = {
        border : '1px solid blue',
        margin : '5px'
    }

    return (
        <div style={separate}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}
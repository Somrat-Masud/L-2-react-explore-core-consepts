
const Friend = ({friend}) => {
    const {name, email}= friend;
    return (
        <div className="box">
            <h1>name:{name}</h1>
            <p>email:{email}</p>
        </div>
    );
};

export default Friend;
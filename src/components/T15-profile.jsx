function Profile(){
    return(
        <div>
            <h1>Profile card challange</h1>
            <ProfileCard
            name="alice"
            age={77}
            greeting={
                <div>
                    <strong>hi alice</strong>
                    </div>
            }
            >
                <p>hobies:reading,hiking</p>
                <button>contant</button>
            </ProfileCard>

            <ProfileCard
            name="bob"
            age={27}
            greeting={
                <div>
                    <strong>hi bob</strong>
                    </div>
            }
            >
                <p>hobies:reading,hiking</p>
                <button>contant</button>
            </ProfileCard>
           
        </div>
    )
}
export default Profile;

function ProfileCard(props){
    return(
        <>
        <h2>name:{props.name}</h2>
        <p>age:{props.age}</p>
        <p>{props.greeting}</p>
        <p>{props.children}</p>
        </>
    )
}
// to get element inside component we should write props.children

// passing jsx as props
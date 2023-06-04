const Feed = ({title, link , date}) => {
    let formatted = {day: "numeric" , month: "long" , year:"numeric"}

    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)
    console.log(title)
    return(
        <>
            <div className="news">
                <h6>{title}</h6>
                <h6>{articleDate}</h6>
            </div>
        </>
    )
}

export default Feed
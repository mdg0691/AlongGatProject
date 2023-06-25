const Feed = ({title, link , date}) => {
    let formatted = {day: "numeric" , month: "long" , year:"numeric"}

    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)
    // console.log(title)
    return(
        <>
        <div class="slide">
			        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /> */}
                    <div className="news">
                        <h6 className="news-title">{title}</h6>
                        <h6>{articleDate}</h6>
                    </div>
        </div>        
        </>
    )
}

export default Feed
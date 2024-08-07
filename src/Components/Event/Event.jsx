import React from 'react'
import "./event.css"
function Event() {
    return (
        <div className='container-event'>
            <div>

                <h1 className='event-heading'>About Event</h1>
               <div ><p className="paragraph" >This is the description of an event. This event was created as an evaluation task for the role of Frontend
                     Engineer. Are you the one we are looking for? Don't get nervous. Take help if you need. Ask us more questions if you did not understand the problem. You can reach-us out at reachus@konfhub.com..</p>
                     </div> 
            </div>
            <div><img className='eventimage' src="https://dev-media.konfhub.com/resources/2024/June/09/1717971318450-ffa21dd4-3b8d-4b4c-878e-32d640579510.png" alt="" /></div>
            <div>
        <iframe className="youtube-container"
          width="770"
          height="520"
          
          src="https://www.youtube.com/embed/bEM35JDYjrI\" // Replace with your YouTube video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      
    </div>
    <div>
      
      <table className="data-table">
        <thead>
          <tr >
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1</td>
            <td>B1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>A2</td>
            <td>B2</td>
            <td>C2</td>
          </tr>
        </tbody>
      </table>
    </div>
                




        </div>
    )
}

export default Event
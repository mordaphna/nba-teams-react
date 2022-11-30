import { useState } from "react";
import { CONTACT_FROM_TABLE_NAME } from "../config";
//the endpoint we need to make a post request to add the comment info
import { CONTACT_FORM_ENDPOINT } from "../config";

//watched this video https://www.youtube.com/watch?v=EcRFYF4B3IQ
async function postContactForm(data){
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  return response;

}
export default function ContactPage() {
  //handle the change of state when the fields name,email and comment are changing 
  const [formData, setFormData] = useState({});

  const [formResponseStatus, setFormResponseStatus] = useState();

  async function handleSubmit(event) {
    //prevent the page from being refreshed when submmiting 
    event.preventDefault();
    const response = await postContactForm(formData);
    //check status for succsess or errors
 
    setFormResponseStatus(response.status);
}


  //when each one of name email or comment is being change we save it in the an object and update it will the user typing
  //https://www.youtube.com/watch?v=IkMND33x0qQ
  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }));
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }));
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }));
    }
  }

  return (
    <div className="row">
      <div className="item">

        <div className="content">
          Contact us if you found any mistakes or missing data, or if you just want to say hello!
        </div>

        <div className="content">

          {formResponseStatus ?(
            <div>{formResponseStatus === 200 ? "Thank you." : "Something went wrong."}</div> ):(
            <form onSubmit={handleSubmit}>
              <input id="form-name"
                      placeholder="Your name"
                      //when we are trying to change from data.name we will call handleChange to change ftomdata
                      value={formData.name} 
                      onChange={handleChange} 
              required />
              <input id="form-email"
                      type="email"
                      placeholder="Your email" 
                      value={formData.email} 
                      onChange={handleChange} 
               required />
              <textarea id="form-comment"
                        placeholder="Your comment" 
                        value={formData.comment} 
                        onChange={handleChange}>
              </textarea>
              <button type="submit">Send</button>

            </form>
          )}
        </div>

      </div>
    </div >
  );
}


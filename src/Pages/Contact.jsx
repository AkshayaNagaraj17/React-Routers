

function Contact() {
  return (
    <div>
      <h1 className="text-2xl text-center mb-10">Contact</h1>
      <div className="flex flex-col m-10">
      <label htmlFor="name"> Name :</label>
      <input type="text" placeholder="Enter name" />
      <label htmlFor="email"> Email :</label>
      <input type="text" placeholder="Enter email" />
      </div>
      
    </div>
  )
}

export default Contact

import React, { Component } from 'react'
import MediaContacts from '../MediaContacts'

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }

        window.emailjs.send("gmail", "contact_form", data).then(alert('Your email has been sent')).catch(err => {console.error(err); alert('An error occured! Please try later.')})
    }

    handleChange(e) {
        this.setState(
            {[e.target.name]: e.target.value}
        )
    }

    render() {
        return (
            <div className="center">
                <div className="left top-section">
                    <h1>Contacts</h1><br/><br/>
                    <h3 className="inline">Email: </h3><p className="inline">tiagoudp@gmail.com</p><br/><br/>
                    <h3 className="inline">Phone number: </h3><p className="inline">+351 914 476 422</p><br/><br/>
                    <h3 className="inline">Social media: </h3>
                    <ul className="inline">
                        <li><MediaContacts index="0" /></li>
                        <li><MediaContacts index="1" /></li>
                        <li><MediaContacts index="2" /></li>
                        <li><MediaContacts index="3" /></li>
                        <li><MediaContacts index="4" /></li>
                    </ul>
                </div>
                <div className="right top-section">
                    <form onSubmit={this.submitForm}>
                        <h1>Contact Me</h1>
                        <table>
                            <tr><td className="bold">Name</td><td><input type='text' name='name' placeholder='Your Name' required value={this.state.name} onChange={this.handleChange}/></td></tr>
                            <tr><td className="bold">Email</td><td><input type="email" name="email" placeholder='youremail@mail.com' required value={this.state.email} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" /></td></tr>
                            <tr><td className="bold">Subject</td><td><input type='text' name='subject' placeholder='Describe subject' required value={this.state.subject} onChange={this.handleChange}/></td></tr>
                            <tr><td className="bold" valign="top">Message</td><td><textarea  id="messageBox" name='message' placeholder="What's your message" required value={this.state.message} onChange={this.handleChange} /></td></tr>
                        </table>
                        <input type="submit" value="Submit" />
                        <br/>
                        <br/>
                    </form>
                </div>
            </div>
        )
    }
}
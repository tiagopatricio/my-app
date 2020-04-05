import React, { Component } from 'react'
import data from '../../data/workExperience.json'
import FormatDate from '../FormatDate'

export default class Experience extends Component {

    renderWE(obj) {
        return (
            <tr>
                <td>
                    {FormatDate(obj.Period.From)} to {obj.Period.Current==="true" ? "now" : FormatDate(obj.Period.To)}
                </td>
                <td>
                    <b>{obj.Position.Label}</b><br/>
                    {obj.Activities}
                </td>
                <td>
                    {obj.Employer.Name} @&nbsp;{obj.Employer.ContactInfo.Address.Contact.Municipality},&nbsp;{obj.Employer.ContactInfo.Address.Contact.Country.Label}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div className="centralize">
                <table className="table">
                    <tr><th>Period</th><th>Position</th><th>Employer</th></tr>
                    {data.WorkExperience.map((obj)=>(this.renderWE(obj)))}
                </table>
                <br/>
                <br/>
            </div>
        )
    }
}
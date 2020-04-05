import React, { Component } from 'react'
import data from '../../data/education.json'
import FormatDate from '../FormatDate'

export default class Education extends Component {

    renderEdu(obj) {
        return (
            <tr>
                <td>
                    {FormatDate(obj.Period.From)} to {obj.Period.Current==="true" ? "now" : FormatDate(obj.Period.To)}
                </td>
                <td>
                    <b>{obj.Title}</b><br/>
                    {obj.Activities}
                </td>
                <td>
                    {obj.Organisation.Name} @&nbsp;{obj.Organisation.ContactInfo.Address.Contact.Municipality},&nbsp;{obj.Organisation.ContactInfo.Address.Contact.Country.Label}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div className="centralize">
                <table className="table">
                    <tr><th>Period</th><th>Description</th><th>Organisation</th></tr>
                    {data.Education.map((obj)=>(this.renderEdu(obj)))}
                </table>
                <br/>
                <br/>
            </div>
        )
    }
}
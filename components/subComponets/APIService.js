import React, { Component } from 'react'
const house_apiUrl = "http://283f4ae37a33.ngrok.io/api/houses/"
class APIService extends Component {
    static async getHouses(body) {
        const response = await fetch(house_apiUrl, {
            "method": "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const resp = await (response.json())
        console.log(resp)
        return resp
    }

}

export default APIService

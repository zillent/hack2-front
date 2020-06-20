import { Component } from "react";

class APIService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._apiBase = window.location.protocol + "//" + window.location.hostname ;
    this.csrftoken = this.getCookie('csrftoken');
  }
  getItems = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      return 'Error';
    };
    return await res.json();
  }

  postItems = async (url, json) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': this.csrftoken
      },
      body: json,
    });
    if (!res.ok) {
      return 'Error';
    };
    return await res.json();;
  }
  getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

}

export default APIService;

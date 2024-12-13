import axios from 'axios';
let isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? true : false;
const currentDomain = window.location.hostname;

const baseUrl = isLocal ? 'https://localhost:7290/api/v1/rls' : `https://${currentDomain}/dataforge/api/v1/rls`;

const userUrl = isLocal ? `https://subscriber.firstwatch.net` : `https://${currentDomain}`;

const pbiUrl = isLocal ? `https://subscriber.firstwatch.net/CustomReports/Reports` : `https://${currentDomain}/CustomReports/Reports`;

const EXPLORATION_AIUSER_URL = isLocal ? `https://subscriber.firstwatch.net/triggerexploration/api/v1/users/` : `https://${currentDomain}/triggerexploration/api/v1/users/`;

const EXPLORATION_TRIGGER_URL = isLocal ? 'https://subscriber.firstwatch.net/triggerexploration/api/v1/triggers/' : `https://${currentDomain}/triggerexploration/api/v1/triggers/`;

export const GetUserInfo = (guid: string) => {
    return axios.get(`${userUrl}/jsonapi/main/Auth.svc/SessionInfo?GUID=${guid}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}

export const InvalidRedirect = () => {
    if(!isLocal)
    return window.location.replace(userUrl);

    return console.log('Invalid Redirect');
}

export const ValidateUserInfo = (guid: string) => {
    return axios.get(`${userUrl}/jsonapi/main/Auth.svc/Validate?GUID=${guid}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}

export const GetSetupLists = (fwCust_Id: Number) => {
    return axios.get(`${baseUrl}/lists?fwCust_Id=${fwCust_Id}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const GetSetupHeaders = (fwCust_Id: Number, listId: string) => {
    return axios.get(`${baseUrl}/columns?fwCust_Id=${fwCust_Id}&listId=${listId}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const GetSetupDataSet = (fwCust_Id: Number, listId: string, dataKey: string) => {
    return axios.post(`${baseUrl}?fwCust_Id=${fwCust_Id}&listId=${listId}&dataKey=${dataKey}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const GetValueObject = (columnName: string, listId: string, itemId: string) => {
    return axios.get(`${baseUrl}/value?columnName=${columnName.replace(/_/g, ' ')}&setupListId=${listId}&itemId=${itemId}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const UpdateVisibility = (fwCust_Id: Number, userGuid: string, itemId: string, enabled: Boolean) => {
    return axios.put(`${baseUrl}/value?fwCust_Id=${fwCust_Id}&userGuid=${userGuid}&itemId=${itemId}&enabled=${enabled}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const GetRLSReport = (fwCust_Id: Number) => {
    return axios.get(`${baseUrl}/report?fwCust_Id=${fwCust_Id}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const GetCustID = (guid: string) => {
    return axios.post(`${EXPLORATION_AIUSER_URL}custid`, guid ,{headers: {"Content-Type": "application/json"}})
    .then(response => {
           return response.data.fwCust_ID;
    })
    .catch(error => {
       //  console.error(error);
    });
}

export const GetPowerBIReport = (workspaceId: String, reportIds: Array<String>) => {
    return axios.post(`${pbiUrl}/GetPowerBIReport/${workspaceId}`, reportIds)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}

export const GetAllCustomerSetupList = (guid: String) => {
    return axios.get(`${baseUrl}/lists/customers?userGuid=${guid}`)
    .then(response =>{
        return response.data;
    }).catch(error => {
        console.error(error);
    })
}

export const LogoutUser = (userGuid: String) => {
    return axios.get(`${userUrl}/jsonapi/main/Auth.svc/Logout?GUID=${userGuid}`).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
    });
}

export const GetRIDESData = (payload: Object) => {
    return axios.post(`${baseUrl}/incident`, payload, {headers: {'Content-Type': 'application/json'}})
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}

export const GetSetup = (fwCust_Id: Number) => {
    return axios.post(`${baseUrl}/setup?fwCust_Id=${fwCust_Id}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.error(error);
    });
}

export const GetTriggerGUID = (userGuid: String, triggerId: Number) => {
    return axios.post(EXPLORATION_TRIGGER_URL + 'guid', {userGuid, triggerId}, {headers: {"Content-Type": "application/json"}}).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
    });
}

export const UpdateAnnotation = (data: Object) => {
    return axios.post(`${baseUrl}/annotations`, data)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}

export const CreateDataItem = (data: Object) => {
    return axios.post(`${baseUrl}/items/create`, data, {headers: {'Content-Type': 'application/json'}})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}
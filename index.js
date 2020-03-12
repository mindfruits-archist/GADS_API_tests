const GoogleAdsApi = require('google-ads-api').GoogleAdsApi
//https://www.npmjs.com/package/google-ads-api
//https://opteo.com/dev/google-ads-api/#authentication

const client = new GoogleAdsApi({
    client_id: '318651980223-u79baf4om96ohtfsgstldrnq9hq0meua.apps.googleusercontent.com',
    client_secret: 'I-M2gjyjmGIh4gzpWanR9Z59',
    developer_token: 'fn_14Di-HTlXoLrY6n1GCg',
})

const customer = client.Customer({
    customer_account_id: '831-905-2336',
    login_customer_id: '831-905-2336', // Optionally provide a login-customer-id
    refresh_token: '1//0dX-C4Z4r3NH5CgYIARAAGA0SNwF-L9IrHlnuQvO-Aol2tx-JcAC8xmcvNCb4qg7Dua8eqV2l__5G3273pHHG1qyruZlbrDes1ko',
})

// If done correctly, you should now be able to list the campaigns in the account 123-123-123
const c = customer.query(`
    SELECT 
      campaign.name, campaign.status
    FROM 
      campaign
`).then(()=>{
	console.log(c)
})
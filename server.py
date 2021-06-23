frappe.response["args"]=(frappe.form_dict)
# frappe.response['args']=(frappe.request.args)
user_no = frappe.response["args"]["user_no"]
customer_no = frappe.response["args"]["customer_no"]
url = "https://www.ivrcloud.in/webapi/c2c?username=c2c@axisblues.com&password=c2c@123&customer="+customer_no+"&agent="+user_no
# frappe.msgprint(url)
headers={}
payload = {}
response=frappe.make_get_request(url=url,headers=headers,auth=None)
# res=response['call generated successfully']
# frappe.msgprint(res)
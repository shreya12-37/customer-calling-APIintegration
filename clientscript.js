frappe.ui.form.on('Lead', {
    refresh(frm) {
        var contacts = [];
        var customer_no;
        //  frappe.db.get_value("User", "shreyamaheshwari3712@gmail.com","phone").done(function(result){
        //     let user_no=result.message.phone;
        //     });
        frm.add_custom_button(__('Call'), function(frm) {
            // var customerd;
            for (var i in cur_frm.doc.__onload.contact_list) {
                contacts.push(cur_frm.doc.__onload.contact_list[i].mobile_no)
            }
            console.log(contacts);
            let d = new frappe.ui.Dialog({
                title: 'select number to be called',
                fields: [{
                    label: 'contact numbers',
                    fieldname: 'phone',
                    fieldtype: 'Autocomplete',
                    options: contacts
                }],
                primary_action_label: 'Submit',
                primary_action(values) {
                    console.log(values);
                    // let customerd = d.get_field("phone");
                    // console.log(values.phone);
                    let customer_no = values.phone;
                    contacts = [];
                    d.hide();
                    console.log(customer_no);
                    frappe.db.get_value("User", "shreyamaheshwari3712@gmail.com", "phone").done(function(result) {
                        let user_no = result.message.phone;
                        frappe.call({
                            method: "customer-calling",
                            args: {
                                "user_no": user_no,
                                "customer_no": customer_no
                            },
                            async: false,
                            freeze: false,
                            callback: function(result) {
                                console.log("call generated successfully.");
                            }
                        });
                    });
                }
            });
            d.show();
            // console.log(customerd);
        })
    }
});
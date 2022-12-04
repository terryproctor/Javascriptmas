function transformData(data){


    function get_full_name(name_obj) {
        let full_name;
        full_name =  name_obj["first"] + " " + name_obj["last"];
        return full_name;
    };

    function get_birthday(date_obj) {
        let dob_str;
        let date_str = date_obj["date"];
        dob_str = new Date(date_str).toDateString();
        return dob_str;
    };

let new_arr = [];

// {"fullName": get_full_name(obj["name"]), "birthday": get_dob(obj["dob"])} 

for (let obj in data){
new_arr.push({"fullName": get_full_name(data[obj]["name"]), "birthday": get_birthday(data[obj]["dob"])});
};

return new_arr;      
};

console.log(transformData(userData));
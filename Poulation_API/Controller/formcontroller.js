const services =require('../Service/formservice');

function getDetails(req, res) {
    services.getdetails()
        .then(data => {
            const { q } = req.query;
            const keys = ['name'];

            const search = (data) => {
                return data.filter(item =>
                    keys.some(key => item[key].toLowerCase().includes(q.toLowerCase()))
                );
            }

            res.send(search(data));
        })
        .catch(error => {
            res.status(500).send("Error in getting details.");
        });
}

function getCount(req, res) {
    setTimeout(() => {
        services.count()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send("Error fetching count.");
        });
        
    }, 2000);
        
}

function saveDetails(req, res) {
    const { name, village, pincode, email, phno, gender, dob } = req.body;

    console.log("Received data:", { name, village, pincode, email, phno, gender, dob });

    if (!name || !village || !pincode || !email || !phno || !gender || !dob) {
        return res.status(400).send("Missing fields.");
    }

    setTimeout(() => {

        services.savedetails(name, village, pincode, email, phno, gender, dob)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error("Error saving details:", error);
            res.status(500).send("Data not added to database.");
        });
        
    }, 2000);
}

function deleteDetails(req,res)
{
    const{id}=req.body;


    services.deleteDetails(id).then(result=>{
        res.send(result)
    })
    .catch(error=>{
        console.log("delete error ",error)
        res.status(500).send("data not deleted")
    })
}



module.exports = {
    getDetails,
    getCount,
    saveDetails,
    deleteDetails
    
};
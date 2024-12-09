db.data2.aggregate([
    {$lookup: {
           from: "data1",//from which collection you take data
           localField: "user_id",//data2 as aggregate it local field 'user_id' 
           foreignField: "id",//data1 will foreign field 'id'
           as: "newUser"//new field added to data2 which was contain the whole data of data1
         }}
    ])
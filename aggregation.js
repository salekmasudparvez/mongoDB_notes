// db.test.aggregate([
//     {
//         $group: {
//             _id: null,
//             TotalSumOfAge: { $sum: "$age" },
//             MaxAge:{ $max: "$age" },
//             MinAge:{ $min: "$age" },
//             AvgAge:{$avg: "$age"},
//             amarDakname:{$first :{firstName:"$name.firstName"}}
//         },
//     },
//     {$addFields:{Subtract:{$subtract: ["$MaxAge","$MinAge"]}}}
// ]);

// the use of unwind 

// db.test.aggregate([
//   // {$unwind: {path:"$interests"}},
//     {
//         $group: {
//             _id: "$age",
//             arrayOfInterest:{"$push":"$interests"}
//         },
//     },
//     {$addFields:{Subtract:{$subtract: ["$MaxAge","$MinAge"]}}}
// ]);
// output with unwind
// {
// 	"_id" : 24,
// 	"arrayOfInterest" : [ "Writing", "Travelling", "Reading" ],
// 	"Subtract" : null
// },

// without unwind output:
// {
// 	"_id" : 53,
// 	"arrayOfInterest" : [
// 		[ "Gaming", "Reading", "Travelling" ],
// 		[ "Travelling", "Reading", "Writing" ]
// 	],
// 	"Subtract" : null
// }

//bucket operator

// db.test.aggregate([
//     {
//         $bucket: {
//             groupBy: "$age", // Group by the age field
//             boundaries: [20, 30, 50], // Define bucket ranges
//             default: "Vai ami default", // Default bucket for values outside ranges
//             output: {
//                 count: { $sum: 1 }, // Count documents in each bucket
//                 whichElement: { 
//                     $push: { age: "$age", name: "$name" } // Push only age and name
//                 }
//             }
//         }
//     },
//     {
//         $project: {
//             count: 1, // Include count
//             whichElement: 1 // Include age and name in the elements
//         }
//     }
// ]);



bd.test.aggregate([
    
    ])
















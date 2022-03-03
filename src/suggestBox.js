
let arr = [
    {
      id: 1,
      firstName: "Amit",
      lastName: "Kumar",
      gender: "Male",
      dob: "2022-02-11",
      email: "amit.kumar3@mail.vinove.com",
      phone: "1234567896",
      permanentAddress: "d8 , delhi , india",
      currentAddress: "d8 , delhi , india",
      profileImagePath: "",
      twelfthMarks: 76,
      tenthMarks: 98,
      studentBio: "Working as Associate Software Developer",
      courseId: 2,
      streamId: 2,
      createdDateTime: "2022-03-01T12:47:20.0981347+05:30",
    },
    {
      id: 2,
      firstName: "Nisha",
      lastName: "Yadav",
      gender: "Female",
      dob: "2022-02-01",
      email: "nishayadav@mail.vinove.com",
      phone: "1234567896",
      permanentAddress: "d8 , delhi , india fgerg",
      currentAddress: "d8 , delhi , india fgerg",
      profileImagePath: "",
      twelfthMarks: 89,
      tenthMarks: 87,
      studentBio: "Software Developer at Vinove",
      courseId: 1,
      streamId: 2,
      createdDateTime: "2022-03-01T12:47:20.0981363+05:30",
    },
    {
      id: 9,
      firstName: "Amit",
      lastName: "Kumar",
      gender: "Male",
      dob: "2022-02-04",
      email: "amit.kumar3@mail.vinove.com",
      phone: "1234567896",
      permanentAddress: "d8 , delhi , india",
      currentAddress: "d8 , delhi , india",
      profileImagePath:
        "Profile/Pictures/a0fab5d0-fb36-4335-a348-6bc822c70792Amit.png",
      twelfthMarks: 89,
      tenthMarks: 70,
      studentBio: "Junior Associate Software Developer",
      courseId: 1,
      streamId: 2,
      createdDateTime: "2022-03-01T12:47:20.0981366+05:30",
    },
  ];

  const [showFiltered , setShowFiltered] = useState([])
  const handleFilter = (value) => {
      let filtered = arr.filter((item)=>item.firstName.toLowerCase().includes(value.toLowerCase())) 
      setShowFiltered(filtered)   
  };

        //   <input onChange={(e) => handleFilter(e.target.value)} />
        // <div>
        //     {showFiltered && showFiltered.map((val)=>(
        //         <div>{val.firstName}</div>
        //     ))}
        // </div> 
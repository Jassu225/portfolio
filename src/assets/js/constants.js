const bioData = [{
    field: "First Name",
    value: "Jaswanth Sai"
},
{
    field: "Last Name",
    value: "Sattenapalli"
}, {
    field: "Date Of Birth",
    value: "07th August, 1997"
}, {
    field: "Height",
    value: "163cm"
}, {
    field: "Mother's Name",
    value: "Vijaya Lakshmi Mannepalli"
}, {
    field: "Mother's Occupation",
    value: "Secondary Grade Teacher"
},{
    field: "Father's Name",
    value: "Hanumantha Rao Sattenapalii"
}, {
    field: "Father's Occupation",
    value: "Secondary Grade Teacher"
}, {
    field: "Native Place",
    value: "Gandhi Nagar, Chirala, Andhra Pradesh, India, 523155",
    className: "address"
}, {
    field: "Residential Address",
    value: "Garvebhavi Palya, Bengaluru, Karnataka, India, 560068",
    className: "address"
}];

const education = [{
    timeLine: "2011 - 2012",
    class: "S.S.C. (10th)",
    school: "G.E.M. High School",
    description: "Completed 10th class with 9.5 GPA in Gayatri English Medium High School, Chirala",
    style: {
        bottom: "calc((44% - 6rem) / 2)",
        right: "4.5rem",
        transform: "rotateY(-30deg)",
        transformOrigin: "110% 50%",
        transitionDelay: "0.4s"
    }
}, {
    timeLine: "2012 - 2014",
    class: "Intermediate (12th)",
    school: "Sri Chaitanya Jr. College",
    description: "Pursued M.P.C.(Maths, Physics and Chemistry) stream in Sri Chaitanya Jr. College, Tulasi Nagar, Vijayawada. Attained 97.2%",
    style: {
        top: "calc(27.4% + (44% - 6rem) / 2)",
        left: "2.5rem",
        transform: "rotateY(30deg)",
        transformOrigin: "-10% 50%",
        transitionDelay: "0.2s"
    }
}, {
    timeLine: "2014 - 2018",
    class: "Bachelor's Degree",
    school: "NIT Durgapur",
    description: "Pursued Computer Science and Engineering (CSE) stream in National Institute of Technology, Durgapur. Cumulative Grading Point Average (GPA) is 8.34",
    style: {
        top: "calc((43% - 6rem) / 2)",
        right: "4.5rem",
        transform: "rotateY(-30deg)",
        transformOrigin: "110% 50%"
    }
}];

const animatedCode = [
    "window.document",
    ".addEventListener(\"load\", _=> {",
    "   console.log(\"Hello World!\");",
    "   window.alert(\"JavaScript rocks!!!😍\");",
    "});"
];

const experienceData = [
    {
        company: "Analytics Quotient",
        description: `We mine data of our clients and build dashboards to visualize the numbers. 
                We use html, css, javascript and jquery as front-end technologies, C# forserver-side and 
                sql for back-end.`,
        designation: "Software Engineer",
        timeLine: {
            from: "Jun, 2018",
            to: "Now"
        }
    },
    {
        company: "Visakhapatnam Port Trust, Visakhapatnam",
        description: `Developed three Android Apps using Android Studio. The apps that were
                developed are "Parking System", "Port Shipping" and "Complaints".`,
        designation: "Intern",
        timeLine: {
            from: "May, 2017",
            to: "Jun, 2017"
        }
    }
];

export {
    bioData,
    education,
    animatedCode,
    experienceData
}
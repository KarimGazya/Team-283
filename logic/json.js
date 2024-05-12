let temp = {
  organizations: [
    {
      first_name: "John",
      last_name: "Doe",
      gender: "Male",
      email: "john.doe@example.com",
      password: "password123",
      contact_number: "+1234567890",
      organization_name: "ABC Charity",
      organization_type: "Non-profit",
      organization_address: "123 Main Street",
      area: "Downtown",
      governorate: "Metropolis",
      description:
        "ABC Charity is dedicated to providing aid and support to underprivileged communities in urban areas. Through various programs and initiatives, we strive to alleviate poverty, promote education, and empower individuals to build a better future for themselves and their families. Our team of volunteers works tirelessly to organize fundraising events, distribute essential supplies, and advocate for social justice. Join us in making a positive impact and bringing hope to those in need.",
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      gender: "Female",
      email: "jane.smith@example.com",
      password: "password456",
      contact_number: "+1987654321",
      organization_name: "XYZ Foundation",
      organization_type: "Non-profit",
      organization_address: "456 Elm Avenue",
      area: "Uptown",
      governorate: "Metropolis",
      description:
        "XYZ Foundation is committed to environmental conservation and sustainability. Our mission is to protect and preserve natural resources for future generations through education, advocacy, and community engagement. We collaborate with local authorities, businesses, and volunteers to implement eco-friendly practices, reduce carbon footprint, and promote biodiversity. Join us in our efforts to create a greener, healthier planet for all living beings.",
    },
    {
      first_name: "David",
      last_name: "Brown",
      gender: "Male",
      email: "david.brown@example.com",
      password: "password789",
      contact_number: "+1122334455",
      organization_name: "Brown Environmental Group",
      organization_type: "NGO",
      organization_address: "789 Oak Street",
      area: "Suburbia",
      governorate: "County",
      description:
        "Brown Environmental Group is dedicated to protecting and preserving the natural environment. Our team conducts research, advocates for policy changes, and implements sustainable solutions to address pressing environmental issues. We collaborate with communities, businesses, and government agencies to promote eco-friendly practices and mitigate the impact of climate change. Join us in our mission to create a healthier and more sustainable planet for future generations.",
    },
    {
      first_name: "Emily",
      last_name: "Johnson",
      gender: "Female",
      email: "emily.johnson@example.com",
      password: "password987",
      contact_number: "+1555666777",
      organization_name: "Green Earth Society",
      organization_type: "Environmental",
      organization_address: "987 Pine Road",
      area: "Rural",
      governorate: "District",
      description:
        "Green Earth Society is a grassroots organization dedicated to promoting environmental awareness and sustainability in rural communities. Through education, outreach programs, and community projects, we strive to empower individuals to adopt eco-friendly practices and protect natural ecosystems. Our volunteers work closely with local schools, businesses, and government agencies to implement recycling initiatives, conservation projects, and renewable energy programs. Join us in our efforts to build a greener and more sustainable future.",
    },
    {
      first_name: "Michael",
      last_name: "Williams",
      gender: "Male",
      email: "michael.williams@example.com",
      password: "password654",
      contact_number: "+1444333222",
      organization_name: "Williams Foundation",
      organization_type: "Charity",
      organization_address: "654 Cedar Lane",
      area: "Urban",
      governorate: "Province",
      description:
        "Williams Foundation is a charitable organization dedicated to improving the lives of vulnerable populations in urban areas. Through our food distribution programs, shelter services, and educational initiatives, we provide essential support to individuals and families facing homelessness, poverty, and food insecurity. Our team of dedicated volunteers works tirelessly to offer hope, dignity, and opportunity to those in need. Join us in our mission to build a more compassionate and equitable society.",
    },
    {
      first_name: "Sarah",
      last_name: "Taylor",
      gender: "Female",
      email: "sarah.taylor@example.com",
      password: "password321",
      contact_number: "+1666777888",
      organization_name: "Healthcare for All",
      organization_type: "Medical",
      organization_address: "321 Maple Avenue",
      area: "City Center",
      governorate: "Region",
      description:
        "Healthcare for All is dedicated to ensuring access to quality healthcare services for all members of society, regardless of their socioeconomic status. Our organization advocates for healthcare reform, supports community health clinics, and provides medical assistance to underserved populations. We believe that access to healthcare is a fundamental human right, and we work tirelessly to eliminate barriers to care and promote wellness in our communities. Join us in our mission to create a healthier and more equitable world.",
    },
    {
      first_name: "Christopher",
      last_name: "Martinez",
      gender: "Male",
      email: "christopher.martinez@example.com",
      password: "passwordabc",
      contact_number: "+1777666555",
      organization_name: "Martinez Legal Aid",
      organization_type: "Legal",
      organization_address: "654 Elm Street",
      area: "Downtown",
      governorate: "Metropolis",
      description:
        "Martinez Legal Aid is a nonprofit organization committed to providing legal assistance and advocacy to individuals who cannot afford legal representation. Our team of experienced attorneys and volunteers offer pro bono services in areas such as family law, immigration, housing, and civil rights. We believe in the importance of equal access to justice and strive to empower individuals to navigate the legal system with confidence and dignity. Join us in our mission to uphold the principles of fairness and equality under the law.",
    },
    {
      first_name: "Amanda",
      last_name: "Garcia",
      gender: "Female",
      email: "amanda.garcia@example.com",
      password: "passworddef",
      contact_number: "+1888777666",
      organization_name: "Garcia Educational Trust",
      organization_type: "Education",
      organization_address: "123 Oak Lane",
      area: "Suburbia",
      governorate: "County",
      description:
        "Garcia Educational Trust is dedicated to promoting access to quality education and lifelong learning opportunities for all individuals. Through scholarships, mentorship programs, and educational initiatives, we support students from underserved communities in pursuing their academic and career aspirations. Our organization also advocates for education reform and works to address systemic barriers to educational equity. Join us in our mission to empower individuals through the transformative power of education.",
    },
    {
      first_name: "James",
      last_name: "Brown",
      gender: "Male",
      email: "james.brown@example.com",
      password: "passwordghi",
      contact_number: "+1999888777",
      organization_name: "Brown Community Center",
      organization_type: "Community",
      organization_address: "456 Maple Road",
      area: "Rural",
      governorate: "District",
      description:
        "Brown Community Center serves as a hub for community engagement and empowerment in rural areas. Our facility offers a wide range of programs and services aimed at enhancing the quality of life for residents, including recreational activities, social services, and educational workshops. We strive to foster a sense of belonging and cohesion within the community while addressing pressing social issues and promoting civic participation. Join us in our efforts to build a stronger, more resilient community for all.",
    },
    {
      first_name: "Jessica",
      last_name: "Rodriguez",
      gender: "Female",
      email: "jessica.rodriguez@example.com",
      password: "passwordjkl",
      contact_number: "+1555333777",
      organization_name: "Rodriguez Animal Shelter",
      organization_type: "Animal Welfare",
      organization_address: "789 Cedar Avenue",
      area: "Urban",
      governorate: "Province",
      description:
        "Rodriguez Animal Shelter is dedicated to rescuing, caring for, and rehoming animals in need. Our shelter provides a safe and nurturing environment for abandoned, abused, and neglected animals, where they receive medical care, rehabilitation, and love. We also promote responsible pet ownership through adoption events, spay/neuter programs, and community outreach. Our team of dedicated staff and volunteers work tirelessly to advocate for animal welfare and ensure that every animal finds a loving forever home.",
    },
    {
      first_name: "Daniel",
      last_name: "Lopez",
      gender: "Male",
      email: "daniel.lopez@example.com",
      password: "passwordmno",
      contact_number: "+1444222111",
      organization_name: "Lopez Food Bank",
      organization_type: "Food",
      organization_address: "321 Pine Lane",
      area: "City Center",
      governorate: "Region",
      description:
        "Lopez Food Bank is dedicated to alleviating hunger and food insecurity in our community. Through our food distribution programs, we provide nutritious meals and essential groceries to individuals and families in need. We also offer nutrition education, cooking classes, and resources to help individuals achieve food security and self-sufficiency. Our organization relies on the support of volunteers, donors, and community partners to fulfill our mission of ensuring that no one goes hungry.",
    },
    {
      first_name: "Melissa",
      last_name: "Perez",
      gender: "Female",
      email: "melissa.perez@example.com",
      password: "passwordpqr",
      contact_number: "+1666999888",
      organization_name: "Perez Homeless Shelter",
      organization_type: "Shelter",
      organization_address: "654 Oak Road",
      area: "Downtown",
      governorate: "Metropolis",
      description:
        "Perez Homeless Shelter provides emergency shelter, support services, and resources to individuals experiencing homelessness in urban areas. Our shelter offers a safe and welcoming environment where guests receive meals, clothing, hygiene supplies, and access to social services. We also provide case management, counseling, and referrals to help individuals secure permanent housing and achieve stability. Our compassionate staff and volunteers are dedicated to providing dignity, hope, and support to those in need.",
    },
    {
      first_name: "Kevin",
      last_name: "Sanchez",
      gender: "Male",
      email: "kevin.sanchez@example.com",
      password: "passwordstu",
      contact_number: "+1777555444",
      organization_name: "Sanchez Youth Center",
      organization_type: "Youth",
      organization_address: "123 Cedar Road",
      area: "Suburbia",
      governorate: "County",
      description:
        "Sanchez Youth Center provides a safe and supportive space for young people to learn, grow, and thrive. Our center offers a variety of recreational activities, educational programs, and mentorship opportunities designed to promote positive youth development and empower young individuals to reach their full potential. We prioritize inclusivity, diversity, and equity in all aspects of our programming, ensuring that all youth feel welcome and valued. Join us in our mission to inspire and empower the next generation of leaders.",
    },
    {
      first_name: "Lauren",
      last_name: "Gonzalez",
      gender: "Female",
      email: "lauren.gonzalez@example.com",
      password: "passwordvwx",
      contact_number: "+1888666555",
      organization_name: "Gonzalez Art Foundation",
      organization_type: "Art",
      organization_address: "456 Elm Lane",
      area: "Rural",
      governorate: "District",
      description:
        "Gonzalez Art Foundation is dedicated to promoting creativity, expression, and cultural enrichment through the arts. Our organization offers art classes, workshops, and exhibitions for individuals of all ages and backgrounds. We believe in the power of art to inspire, educate, and transform communities, and we work to ensure that everyone has access to artistic opportunities and experiences. Join us in celebrating diversity, fostering creativity, and building a more vibrant and inclusive society through the arts.",
    },
    {
      first_name: "Ryan",
      last_name: "Rivera",
      gender: "Male",
      email: "ryan.rivera@example.com",
      password: "passwordyz",
      contact_number: "+1555222888",
      organization_name: "Rivera Cultural Exchange",
      organization_type: "Cultural",
      organization_address: "789 Maple Street",
      area: "Urban",
      governorate: "Province",
      description:
        "Rivera Cultural Exchange is dedicated to promoting cross-cultural understanding, dialogue, and collaboration through arts, education, and exchange programs. Our organization facilitates cultural exchanges, international partnerships, and immersive experiences that foster empathy, mutual respect, and global citizenship. We believe in the power of cultural exchange to bridge divides, challenge stereotypes, and build connections across borders. Join us in our mission to promote peace, diversity, and intercultural understanding.",
    },
    {
      first_name: "Ashley",
      last_name: "Scott",
      gender: "Female",
      email: "ashley.scott@example.com",
      password: "password1234",
      contact_number: "+1444111222",
      organization_name: "Scott Music Academy",
      organization_type: "Music",
      organization_address: "321 Pine Avenue",
      area: "City Center",
      governorate: "Region",
      description:
        "Scott Music Academy is dedicated to providing high-quality music education and performance opportunities for students of all ages and skill levels. Our academy offers private lessons, group classes, and ensemble programs in various musical genres, including classical, jazz, rock, and pop. We believe in the transformative power of music to inspire creativity, foster personal growth, and build community. Join us in our mission to cultivate a lifelong love of music and empower individuals to achieve their musical goals.",
    },
    {
      first_name: "Jason",
      last_name: "Torres",
      gender: "Male",
      email: "jason.torres@example.com",
      password: "password5678",
      contact_number: "+1666888999",
      organization_name: "Torres Sports Club",
      organization_type: "Sports",
      organization_address: "654 Oak Lane",
      area: "Downtown",
      governorate: "Metropolis",
      description:
        "Torres Sports Club is dedicated to promoting physical fitness, sportsmanship, and teamwork through a variety of recreational and competitive sports programs. Our club offers training sessions, leagues, and tournaments for athletes of all ages and abilities, with a focus on inclusivity and fair play. We believe in the power of sports to foster camaraderie, build character, and promote healthy lifestyles. Join us in our mission to empower individuals through the joy of sports and recreation.",
    },
    {
      first_name: "Stephanie",
      last_name: "Nguyen",
      gender: "Female",
      email: "stephanie.nguyen@example.com",
      password: "password9012",
      contact_number: "+1777999888",
      organization_name: "Nguyen Technology Institute",
      organization_type: "Technology",
      organization_address: "123 Maple Road",
      area: "Suburbia",
      governorate: "County",
      description:
        "Nguyen Technology Institute is dedicated to promoting STEM education, innovation, and digital literacy in our community. Our institute offers coding bootcamps, robotics workshops, and technology training programs for students, educators, and professionals. We believe in the transformative potential of technology to solve problems, drive economic growth, and empower individuals to shape the future. Join us in our mission to inspire curiosity, creativity, and innovation through technology education.",
    },
    {
      first_name: "Brandon",
      last_name: "Hernandez",
      gender: "Male",
      email: "brandon.hernandez@example.com",
      password: "password3456",
      contact_number: "+1888999777",
      organization_name: "Hernandez Innovation Lab",
      organization_type: "Innovation",
      organization_address: "456 Cedar Avenue",
      area: "Rural",
      governorate: "District",
      description:
        "Hernandez Innovation Lab is a collaborative workspace and incubator for entrepreneurs, inventors, and innovators. Our lab provides access to resources, mentorship, and networking opportunities to help startups and small businesses thrive. We believe in the power of innovation to drive economic growth, create jobs, and solve complex challenges facing our society. Join us in our mission to cultivate a culture of creativity, entrepreneurship, and innovation in our community.",
    },
    {
      first_name: "Rachel",
      last_name: "Tran",
      gender: "Female",
      email: "rachel.tran@example.com",
      password: "password7890",
      contact_number: "+1555444333",
      organization_name: "Tran Research Foundation",
      organization_type: "Research",
      organization_address: "789 Elm Lane",
      area: "Urban",
      governorate: "Province",
      description:
        "Tran Research Foundation is dedicated to advancing scientific knowledge and innovation through research, education, and collaboration. Our foundation supports groundbreaking research projects in fields such as healthcare, technology, and environmental science, with a focus on addressing pressing global challenges. We also offer research grants, scholarships, and training",
    },
  ],
};

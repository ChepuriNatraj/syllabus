// Course data - keeping all original content exactly as provided
const courseData = {
    vlsi: {
        title: "VLSI Design",
        type: "Core",
        objectives: [
            "VLSI technology",
            "circuit design processes with stick diagrams and layout diagrams.",
            "VLSI circuit",
            "scaling of MOS circuits with sub system design and layout"
        ],
        outcomes: [
            "Describe the basic concepts of VLSI technology.",
            "Demonstrate circuit design processes with stick diagrams and layout diagrams.",
            "Understand the aspects of design tools, testability and practical design for guidelines.",
            "Demonstrate basic circuit concepts.",
            "Summarize scaling of MOS circuits with sub system design and layout."
        ],
        units: [
            {
                title: "UNIT - I",
                content: "Review of microelectronics and an introduction to MOS technology: Introduction to IC technology, MOS and related VLSI technology, NMOS, CMOS, BiCMOS Technologies, Thermal aspects of processing, Production of E beam marks."
            },
            {
                title: "UNIT – II",
                content: "MOS and BiCMOS circuit design processes: MOS layers, Stick diagrams, Design rules, and layout, 2 & 1.2 micro meter CMOS rules, Layout diagrams, Symbolic diagram. Basic Circuit concepts - Sheet resistance, Area capacitances of layers, Delay unit, Wiring Capacitances, Choice of layers. Scaling of MOS Circuits -Scaling models, Scaling function for device parameters, Limitations of scaling."
            },
            {
                title: "UNIT – III",
                content: "Sub system design and Layout: Architectural issues, Switch logic, Examples of Structural design (Combinational logic). Sub system design process Design of ALU subsystem, some commonly used storage elements, Aspects of design tools, Design for testability, Practical design for test guidelines, Built in self-test, CMOS project-an incrementor / decrementer, a comparator for two n-bit numbers. Ultra-fast systems, Technology development, MOSFET based design."
            },
            {
                title: "UNIT – IV",
                content: "Introduction to Embedded Systems: Embedded Systems, Processor Embedded into a System, Embedded Hardware Units and Devices in a System, Embedded Software in a System, Examples of Embedded Systems, Embedded Systems on Chip, Complex Systems Design and Processors, Design Process in Embedded System, Formalization of System Design, Design Process and Design Examples, Classification of Embedded Systems, Skills required for an Embedded System Designer."
            },
            {
                title: "UNIT – V",
                content: "Embedded Software Development Process and Tools: Introduction to Embedded Software Development Process and Tools, Host and Target Machines, Linking and Locating Software, Getting Embedded Software into the Target System, Issues in Hardware-Software Design and Co-design"
            }
        ],
        textBooks: [
            "Basic VLSI Design by Douglas A, Pucknell, Kamran Eshraghian, Prentice-Hall, 1996, 3rd Edition.",
            "Embedded Systems Architecture, Programming and Design, second edition by Raj Kamal, Tata McGraw Hill Publication (Chapter 1, Chapter 13)"
        ],
        referenceBooks: [
            "Mead, C.A and Conway, LA, \"Introduction to VLSI Systems\", Addison-Wesley, Reading, Massachusetts, 1980."
        ]
    },
    aiml: {
        title: "Artificial Intelligence and Machine Learning (AI/ML)",
        type: "OE",
        objectives: [
            "Know user interfaces to improve human and AI interaction and decision making.",
            "Allows the students to develop AI skills.",
            "Introduce the concepts of expert systems and machine learning.",
            "To be able to apply machine learning algorithms to solve problems of moderate complexity."
        ],
        outcomes: [
            "Understanding Artificial Intelligence and different branches of Artificial Intelligence and demonstrate awareness of informed search and exploration methods.",
            "Understanding various Machine Learning Methods.",
            "Analyzing the different Classification and Regression Techniques.",
            "Familiarization of Architecture in Convolution Neural Networks.",
            "Understanding the concepts of different supervised learning methods and its Applications."
        ],
        units: [
            {
                title: "Unit I",
                content: "Introduction to Artificial Intelligence: Biological Motivation for a Human Brain, Neural Network Representation, ANN Architecture, Perceptron, Multi-Layer Perceptron Structure, Back Propagation."
            },
            {
                title: "Unit II",
                content: "Machine Learning: Introduction to Machine Learning, Different Types of Machine Learning Methods, Supervised, Semi Supervised, Unsupervised and Reinforcement Learning."
            },
            {
                title: "Unit III",
                content: "Classification and Regression Algorithms: Difference Between Classification and Regression, Classification Algorithms, KNN, SVM Algorithms and its Applications, Regression Algorithm, Linear Regression, Decision Tree Regression and Random Forest Regression."
            },
            {
                title: "Unit IV",
                content: "Convolution Neural Networks: Introduction to Convolution Neural Networks, Basic Principle, Architecture, Types of CNN Layers, Pooling Layers, Convolution Layers and Fully Connected Layers, Applications of CNN."
            },
            {
                title: "Unit V",
                content: "Advanced Topics in Artificial Intelligence and Machine Learning: DNN Model, Significance, Overview of DNN Technique and its Applications, Generative Models, Working Principle of GAN and its Applications."
            }
        ],
        textBooks: [
            "Artificial Intelligence and Machine Learning by Vinod Chandra SS and Anand Hareendran S, PHI Publications.",
            "Artificial Intelligence – A Model Approach Stuart Russel and Peter Norvig."
        ],
        referenceBooks: [
            "(as listed in PDF)"
        ]
    },
    "info-theory": {
        title: "Information Theory and Coding",
        type: "OE",
        objectives: [
            "To provide an insight into the concept of information in the context of communication theory and its significance in the design of communication receivers.",
            "To explore in detail, the calculations of channel capacity to support error-free transmission and also, the most commonly used source coding and channel coding algorithms.",
            "Introduction to error-correcting codes. Types of error correcting codes and its applications",
            "To encourage and train to design coding schemes for data compression and error correction."
        ],
        outcomes: [
            "Overview of Probability Theory, significance of \"Information\" with respect to Information Theory. Derive equations for entropy, mutual information and channel capacity for all kinds of channels.",
            "Implement the various types of source coding algorithms and analyse their performance.",
            "Explain various methods of generating and detecting different types of error correcting codes.",
            "Understand the fundamentals of Field Theory and polynomial arithmetic, and design linear block codes and cyclic codes (encoding and decoding).",
            "Implement and decode a sequence at the receiver using Trellis decoder and Viterbi decoder."
        ],
        units: [
            {
                title: "UNIT – I",
                content: "Information Theory: Information measure, Entropy and Information rate, Coding for a discrete memory less source, Predictive coding for sources with memory, Information transmission on discrete channels, Mutual information."
            },
            {
                title: "UNIT – II",
                content: "Information Channels: Discrete channel capacity, coding for the binary symmetric channel, Continuous channels and system comparisons, continuous information, continuous channel capacity, Ideal communication system, system comparisons."
            },
            {
                title: "UNIT – III",
                content: "Error Controlling Coding: Introduction, Examples of Error control coding, methods of Controlling Errors, Types of Errors, types of Codes, Linear Block Codes: matrix description of Linear Block Codes, Error detection & Correction capabilities of Linear Block Codes, Single error correction Hamming code, Table lookup Decoding using Standard Array."
            },
            {
                title: "UNIT – IV",
                content: "Binary Cyclic Codes: Algebraic Structure of Cyclic Codes, Encoding using an (n-k) Bit Shift register, Syndrome Calculation, Error Detection and Correction"
            },
            {
                title: "UNIT – V",
                content: "Convolution Coding: Practical Convolution Encoder, Time Domain Approach, Transform Domain Approach, The Code Tree, Code Trellis, State Diagram, Decoding Methods of Convolution Codes, Sequential Decoding, Burst Error Detection and Correction Codes, Concatenated Block Codes, Turbo Codes."
            }
        ],
        textBooks: [
            "Communication Systems, 3/e, by A.B. Carlson, Mc. Graw Hill Publishers (for topic1)",
            "Digital Communications by Simon Haykin, John Wiley & Sons (for topic 2).",
            "Principles of Digital Communication, J. Das, S.K.Mullick, P. K. Chatterjee, Wiley, 1986-Technology & Engineering.",
            "Information Theory and Coding, HariBhat, Ganesh Rao, Cengage, 2017."
        ],
        referenceBooks: [
            "(as in PDF)"
        ]
    },
    gps: {
        title: "Global Positioning System (GPS)",
        type: "PE",
        objectives: [
            "Global Position System with GPS working principle.",
            "Other global satellite constellations.",
            "GPS satellite constellation and signals.",
            "Block diagrams of Synthetic Aperture Radar (SAR), Phased array Radars and others.",
            "different coordinate systems"
        ],
        outcomes: [
            "Understand the basic concepts of Global Position System with GPS working principle.",
            "Understand the basic concepts of other global satellite constellations.",
            "Analyze various GPS Errors.",
            "Analyze GPS satellite constellation and signals.",
            "Examine different coordinate systems."
        ],
        units: [
            {
                title: "UNIT – I",
                content: "Introduction to GPS: Global Position System, the History of GPS, the Evolution of GPS, Development of NAVSTAR GPS, Block I, Block II satellites, Block IIA, Block IIR and Block II R-M satellites."
            },
            {
                title: "UNIT – II",
                content: "GPS Working: Principal Trilateration, Determination of where the satellites are, Determination of how far the satellites are, Determining the receiver position in 2D or X-Y Plane, Determining the receiver position in 3D or X-Y-Z Plane, basic equations for finding user position, user position determination with least squares estimator."
            },
            {
                title: "UNIT – III",
                content: "Other Global Satellite Constellation: GLONASS, GALILEO, Comparison of 3GNSS (GPS, GALILEO, GLONASS) in terms of constellation and services provided."
            },
            {
                title: "UNIT – IV",
                content: "GPS Satellite constellation and Signal Structure: GPS system segments, Space segment, Control segment, User segment, GPS Signals, Pseudorandom noise (PRN) code, C/A code, P code Navigation data, Signal structure of GPS."
            },
            {
                title: "UNIT – V",
                content: "Coordinate Systems: Geoid, Ellipsoid, Coordinate Systems, Geodetic and Geocentric coordinate systems, ECEF coordinates, world geodetic 1984 system, Conversion between Cartesian and geodetic coordinate frame."
            }
        ],
        textBooks: [
            "G S RAO, Global Navigation Satellite Systems, McGraw-Hill Publications, New Delhi, 2010.",
            "Pratap Mishra, Global positioning system: signals, measurements, and performance, Ganga-Jamuna Press, 2006."
        ],
        referenceBooks: [
            "(as in PDF)"
        ]
    },
    finance: {
        title: "Financial Management for Engineers (HSSE)",
        type: "HSSE",
        objectives: [
            "To provide awareness and understanding of the ways finance helps in reaching business objectives.",
            "To familiarize with the form, content and analysis of financial statements and the accounting principles and techniques.",
            "To Identify signals pointing to deterioration in financial condition and analyze the reasons for variances between the actual and budgeted results",
            "To facilitate in the improvement of organizations' performance by pointing out the importance of cost control, breakeven and variance analysis.",
            "To equip with the ability to communicate comfortably with Financial Executives and discuss the financial performance of the organization effectively."
        ],
        outcomes: [
            "Ability to analyze financial statements.",
            "Understanding costs and methods to reduce them.",
            "Taking decisions regarding the price of the products services, or both.",
            "Understanding of capital budgeting and various capital budgeting techniques.",
            "Skill to practice different Budgeting Systems in organizations."
        ],
        units: [
            {
                title: "UNIT-I",
                content: "Accounting concepts and systems - Elements of Financial Statements - trading, profit & loss Statement- Cash Flow Statements - Notes to Accounts - Profits vs. Cash Flows."
            },
            {
                title: "UNIT-II",
                content: "Analysis of Financial Statements - Financial Analysis-Financial Ratios and their Interpretations covering: Profitability Ratios; Liquidity Ratios; Return on Capital Ratios; - Management of Working Capital: Capital and Its Components - Working Capital Cycle - Working Capital Financing."
            },
            {
                title: "UNIT-III",
                content: "Management Decision Making: Cost concepts and its application in Decision Making - Types of cost – Direct & Indirect, Fixed & Variable - Cost Sheet - Cost Volume Profit Analysis - Understanding Cost behavior – Cost concepts and its application in Decision Making - Relevance of Activity Based Costing - Marginal Costing - Make or Buy - Shut down or continue - Sell or process further - Domestic vs. Export Sales."
            },
            {
                title: "UNIT-IV",
                content: "Budgets and Budgetary Control: Different types of Budgets (Departmental, Function based, Cash, Master) - Budgeting systems (ABC / ZBB / Rolling/ Incremental / Planning) - Variance Analysis - Capital Budgeting and Investment Appraisals - Meaning of Capital Budgeting - Relevance of Capital Budgeting - Techniques of Capital Budgeting - Payback Period - Accounting Rate of Return - Net Present Value - Internal Rate of Return - Discounted Payback Period."
            },
            {
                title: "UNIT-V",
                content: "Means of Finance: Financial Instruments - Shares, Debentures, Derivatives - Share Capital Vs. Term Loans - Leasing - Financial Markets - Capital Markets - Stock Exchanges."
            }
        ],
        textBooks: [
            "Finance for Non-Finance People by Sandeep Goal (2017), Publisher: Taylor and Francis.",
            "Finance for Non-Finance Managers by B.K. Chatterjee (1988), Jaico Publishing House.",
            "Finance for Nonfinancial Managers: Finance for Small Business, Basic Finance Concepts by Murugesan Ramaswamy (2021)."
        ],
        referenceBooks: [
            "(as in PDF)"
        ]
    },
    radar: {
        title: "Radar Engineering (PE)",
        type: "PE",
        objectives: [
            "To study the principles of operation of various blocks of Radar systems and Radar Range equation in detail.",
            "To study the functions of various blocks of CW Radar, FM-CW Radar, MTI and Pulse Doppler Radars, Tracking radar and their limitations and applications.",
            "To study the functions of various blocks of Radar receivers and detection of Radar signals in noise in detail.",
            "To study the principles and working of phased array antennas and their application to radar systems."
        ],
        outcomes: [
            "Understand the basic concepts of Radar, equation and factors influencing radar range equation.",
            "Knowledge of different types of radars and understand the detection criteria for different parameters.",
            "Distinguish the fixed and moving targets using different types of radar systems. Analyze Tracking Radar.",
            "Examine block diagrams of Synthetic Aperture Radar (SAR), Phased array Radars and others.",
            "Knowledge about different radar transmitters and receivers and identify the different types of display devices & duplexers used in radar receivers."
        ],
        units: [
            {
                title: "UNIT – I",
                content: "Introduction to RADAR: Radar Equation, Radar Block Diagram and Operation, Prediction of Range, Minimum Detectable Signal, Receiver Noise, Probability Density Functions, S/N, Integration of Radar Pulses, Radar Cross-section, Transmitter Power, PRF and Range Ambiguities, Radar Antenna Parameters, System Losses and Propagation Effects."
            },
            {
                title: "UNIT - II",
                content: "MTI and Pulse Doppler RADAR: Introduction, Delay line Cancellers, Moving target Detector, Limitation to MTI performance, MTI from moving platform, Pulse Doppler Radar."
            },
            {
                title: "UNIT – III",
                content: "Tracking RADARS: Sequential Lobing, Conical Scan, Monopulse tracking Radar, Low angle tracking, Pulse compression, Block Diagrams of Synthetic Aperture Radar (SAR), Phased array Radars, MST Radar, ECM, ECCM."
            },
            {
                title: "UNIT – IV",
                content: "Detection of Signals in Noise: Matched Filter Receiver, Detection Criteria, Constant False Alarm Rate Receivers. Information From RADAR Signals: Basic Radar Measurements, Pulse Compression, Target Recognition."
            },
            {
                title: "UNIT – V",
                content: "RADAR Transmitters and Receivers: Magnetron, Solid State RF Power Source, Other Aspects of Radar Transmitters, Radar Receiver, Superheterodyne Receiver, Duplexers and Receivers Protectors, Radar Displays."
            }
        ],
        textBooks: [
            "Radar Engineering and Fundamentals of Navigational Aids, G S N Raju, IK International Publishers, 2008."
        ],
        referenceBooks: [
            "Introduction to Radar Systems, Skolnik, McGraw Hill, 2007."
        ]
    },
    "web-tech": {
        title: "WEB Technologies (EC4107 / SC)",
        type: "SC",
        objectives: [
            "To develop an ability to design and implement static and dynamic website.",
            "Create conforming web pages.",
            "Understand, analyze and create XML documents and XML Schema.",
            "Understand, analyze and build web applications using PHP.",
            "Handling Cookies and Sessions using PHP, SERVLETS and JSP."
        ],
        outcomes: [
            "Design and implement dynamic websites with good aesthetic sense of designing and latest technical know-how's.",
            "Create web pages using HTML and Cascading Styles sheets.",
            "Analyze a web page and identify its elements and attributes.",
            "Create dynamic web pages using JavaScript.",
            "Build web applications using PHP."
        ],
        units: [
            {
                title: "Lab Task 1",
                content: "Design the following static web pages required for an online book store web site. i) HOME PAGE: The static home page must contain three frames. ii) LOGIN PAGE iii) CATALOGUE PAGE: The catalogue page should contain the details of all the books available in the web site in a table. iv) REGISTRATION PAGE"
            },
            {
                title: "Lab Task 2",
                content: "JavaScript validation for Registration page fields: First Name (alphabets only, length ≥ 6), Password (length ≥ 6), E-mail id (standard pattern name@domain.com), Mobile Number (10 digits), Last Name and Address (not empty)."
            },
            {
                title: "Lab Task 3",
                content: "Develop and demonstrate inline, internal and external style sheets using CSS."
            },
            {
                title: "Lab Task 4",
                content: "JavaScript tasks with POP-UP boxes and functions: Display Date in textbox (onclick), Prompt for n → alert factorial of n, Prompt for n → alert multiplication table 1..10 of n, Prompt for n and confirm more numbers → alert sum of numbers"
            },
            {
                title: "Lab Task 5",
                content: "HTML + JavaScript exercise: selection box with list of 5 countries; selecting a country prints its capital next in the list; style capital with CSS (color, bold, size)."
            },
            {
                title: "Lab Task 6",
                content: "HTML + JavaScript: take a number 0..999 and show it in words (reject 4+ digits, alphabets, special chars)."
            },
            {
                title: "Lab Task 7",
                content: "Develop and demonstrate PHP scripts for common tasks (examples in PDF; sample exercises continue)."
            }
        ],
        textBooks: [
            "(Selected programs from PDF)"
        ],
        referenceBooks: [
            "(as listed in PDF)"
        ]
    }
};

// Modal functionality
function showCourseDetails(courseKey) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const course = courseData[courseKey];
    if (!course) return;
    
    modalTitle.textContent = course.title;
    
    modalBody.innerHTML = `
        <div class="course-detail-section">
            <h3><i class="fas fa-target"></i> Course Objectives</h3>
            <ul>
                ${course.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        </div>
        
        <div class="course-detail-section">
            <h3><i class="fas fa-trophy"></i> Course Outcomes</h3>
            <ul>
                ${course.outcomes.map((outcome, index) => `<li><strong>CO ${index + 1}:</strong> ${outcome}</li>`).join('')}
            </ul>
        </div>
        
        <div class="course-detail-section">
            <h3><i class="fas fa-book-open"></i> Syllabus</h3>
            ${course.units.map(unit => `
                <div class="unit-section">
                    <div class="unit-title">${unit.title}:</div>
                    <p>${unit.content}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="books-section">
            <h4><i class="fas fa-books"></i> Text Books</h4>
            ${course.textBooks.map((book, index) => `
                <div class="book-item">
                    <strong>${index + 1}.</strong> ${book}
                </div>
            `).join('')}
            
            <h4><i class="fas fa-bookmark"></i> Reference Books</h4>
            ${course.referenceBooks.map((book, index) => `
                <div class="book-item">
                    <strong>${index + 1}.</strong> ${book}
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(nl => nl.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('courseModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Intersection Observer for nav active states
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                const correspondingNavLink = document.querySelector(`a[href="#${targetId}"]`);
                
                if (correspondingNavLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Animate course cards on scroll
    const courseCards = document.querySelectorAll('.course-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Initially hide cards
    courseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Add hover effects to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

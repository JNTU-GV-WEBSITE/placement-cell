import React from "react";
import "../About.css";
import directorImage from "./director1.jpg";

function Director() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Co-ordinator of Placement Cell</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={directorImage}
                alt="Profile"/>
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">Dr.T.S.N.Murthy</h3>
            <h4 className="ADh4">Co-ordinator of Placements Cell</h4>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
            Assistant Professor of Dept. of Electronics and Communication Engineering
            </h4>
          </div>
        </center>
        <hr />
        {/* Profile description */}
        <p>Email : tsnmurthy.ece@jntugvcev.edu.in</p>
        <hr></hr>
        

        
        <p className="ADsub">Academic/Professional Awards and Recognition</p>
        <p>Appreciation award received from IEEE Signal Processing Society in 2019
           for dedicated leadership to and support of the activities of the SPS Hyderabad Chapter.</p>
        
        
        <p className="ADsub">Educational Qualifications</p>
        <h6>Ph.D.(September 2016)</h6>
        <p>
            ❖ Department of Electronics & Communication Engineering, Osmania University, Hyderabad, Andhra Pradesh, India.
          </p>
          <p>
            ❖ Supervisor : Prof. K Deergha Rao.
          </p>
          <p>❖ Area of Study : Communication and Signal Processing.</p>
          <h6>M.Tech.(Communication Engineering 2005)</h6>
          <p>
            ❖ Acharaya Nagarjuna University (V R Siddhartha Engineering College, Vijayawada), Andhra Pradesh, India.
          </p>
          <h6>B.Tech.(Electronics & Communication Engineering 2002)</h6>
          <p>
            ❖ Acharaya Nagarjuna University (S V H College of Engineering, Machilipatnam), Andhra Pradesh, India.
          </p>
       
          <p className="ADsub">Professional (Research/Teaching) Experience</p>
          <p>
            ❖ Assistant Professor 1/2013 to Current :
               Dept of ECE, University College of Engineering Vizianagaram, 
               Jawaharlal Nehru Technological University Kakinada (JNTUK), 
               Vizianagaram, Andhra Pradesh - 535003.
          </p>
          <p>❖ Assistant Professor 8/2006 to 1/2013 :
                Dept of ECE, Chaitanya Bharathi Institute of Technology (CBIT),
                 Gandipet, Hyderabad, Telangana – 500075.</p>
          <p>
            ❖ Senior Research Assistant 8/2004 to 8/2006 (DRDO Project) :
               Research and Training Unit of Navigational Electronics (NERTU), 
               Osmania University, Hyderabad, Telangana – 500007.
          </p>
          <p>❖ Presently Supervising Two PhD Students at JNTUK-Kakinada.</p>
         

          <p className="ADsub">Administrative Service in this Institutions.</p>
          <p>❖ Training and Placement Officer, UCEV – June 2016 to Jan 2020.</p>
          <p>❖ Secretary, UCEV Teachers Association -2018. </p>
          <p>❖ Alumni Secretary – April 2018 to till date.</p>
          <p>
            ❖ Branch counsellor, UCEV IEEE Student Branch – September 2019 to till date.
          </p>
        
        
          <p className="ADsub">Administrative Service to Other Institutions</p>
          <p>As a Branch Counsellor of IEEE CBIT Student branch (STB 31231), organized 4 technical 
            seminars, panel discussions and also IEEE student members attended the National student 
            congress organized by the IEEE Hyderabad section in 2009. In 2010, organized two
             technical workshops, one is on Robotics in March and the other one is on MATLAB in November. 
              In the month of August, one industrial visit to the Indian Space Research Organization (ISRO)
               Srihari Kota is been organized.  Apart from these events, the branch took an active part in 
               conducting National Level paper contest in CBIT (Synapse 2010). In 2011, organized 
               one workshop on recent trends in communication, and two technical seminars, panel discussions.</p>
               <p>❖ Communication and Signal Processing Societies joint chapter, IEEE Hyderabad section.</p>
               <p>❖ Served as a Secretary for this chapter from March 2010 to Dec 2011.</p>
               <p>❖ Served as Vice-Chairmen for the year 2012 & 2019.</p>
               <p>❖ Secretary and Treasurer for IEEE Vizag Bay Subsection for the year 2015.</p>
               <p>❖ Secretary for IEEE Vizag Bay Subsection for the year 2016.</p>
               <p>❖ EC Member, for IEEE Vizag Bay Subsection 2017 & 2018.</p>
               <p>❖ Treasurer for IEEE Vizag Bay Subsection for the year.</p>
               <p>❖ Chair, IEEE Communication & Signal Processing joint Societies Chapter, IEEE Vizag Bay Section for the year 2020.</p>
               <p>❖ As a Vice-chair, Received the Best Chapter Award from IEEE Signal Processing Society for the year 2019.</p>

               <p className="ADsub">Research Interests</p>
               <p>❖ Signal Processing</p>
               <p>❖ Communications</p>
               <p>❖ Navigations</p>

               <p className="ADsub">Summary of Research Output</p>
               <p>❖ No. of UG Projects Guided : 16</p>
               <p>❖ No. of PG Thesis Guided : 9</p>

               <p className="ADsub">Details of Courses Taught</p>
               <h6>UG courses taught</h6>
               <p>❖ Electronic devices and circuits</p>
               <p>❖ Network theory</p>
               <p>❖ Signals and systems</p>
               <p>❖ Electronic circuit analysis</p>
               <p>❖ Analog communications</p>
               <p>❖ Pulse and digital circuits</p>
               <p>❖ Digital communications</p>
               <p>❖ Satellite communications</p>
               <p>❖ Antenna and wave propagation</p>
               <p>❖ Cellular and mobile communications</p>
               <p>❖ Information theory and coding techniques</p>
               <h6>PG courses taught</h6>
               <p>❖ Coding theory and applications</p>
               <p>❖ Detection and estimation theory</p>
               <p>❖ Adaptive signal processing</p>

               <p className="ADsub">Membership of Academic/Professional Bodies</p>
               <p>❖ Senior Member of IEEE - 90399100 (2011)</p>
               <p>❖ Member of IET - 1100264398</p>
               <p>❖ MIETE - M-237246</p>
               <p>❖ MIE - M-150324-8</p>
               <p>❖ LMISTE - LM 101550</p>

               <p className="ADsub">Workshops/Conferences Organized </p>
               <p>❖ Governing body Member for Kaushik College of Engineering, Vizag nominated by JNTUK University, 2013.</p>
               <p>❖ Faculty Coordinator for the Two-Day workshop on “Communications, Signal and Image Processing” organized by Dept of ECE, UCEV, JNTUK, Vizianagaram held during 28th and 29th June 2013.</p>
               <p>❖ Faculty Co-ordinator for Three-Day FDP conducted by Directorate of Faculty Development centre, JNTUK in collaboration with VANGAURDZ, Hyderabad during 13th and 15th June 2013.</p>
               <p>❖ Faculty Co-ordinator for Two-Day National Level student technical fest organized by Dept of ECE, UCEV, JNTUK, Vizianagaram held during 10th and 11th April 2014.</p>
               <p>❖ Conducted Cultural competitions in view of Annual Day -2016 celebrations at UCEV, JNTUK, Vizianagaram, 2016.</p>
               <p>❖ Judge for Student Paper Contest in ELECTRIQUE-2016, at UCEV, JNTUK, Vizianagaram held during 22-23 February 2016.</p>
               <p>❖ Organized a Poster Presentation in the department of ECE in association with the IETE Student forum in Jan 2017.</p>
               <p>❖ Faculty Co-ordinator for Two-Day National Level student technical fest organized by Dept of ECE, UCEV, JNTUK, Vizianagaram held during 7th and 8th March 2018.</p>
               <p>❖ Faculty Coordinator for Science Fair (ILLUMINATION 2018) FOR STUDENTS OF 6TH to 9TH Standards of all Govt. (Govt. ZP and Govt. Aided) schools organized by Dept of ECE, UCEV, JNTUK, Vizianagaram held during 7th and 8th March 2018.</p>
               <p>❖ Chaired a Technical session on “Communications & Signal Processing” at the 5th Springer international conference on Micro-Electronics and Telecommunications (ICMEET 2019) during 6th & 7th December 2019 at Vizag.</p>
               <p>❖ Faculty Coordinator for A One-Week online FDP on “Recent Advances in Communications and Signal Processing” organized by Dept of ECE, UCEV, JNTUK, Vizianagaram from 24th – 29th August 2020.</p>

               <p className="ADsub">Invited talks in Workshops and Conferencese </p>
               <p>❖ Resource Person for Faculty Development Program on “Improving Teaching Skills in Electronics Devices and Circuits” organized by Faculty development centre, JNTUK, Kakinada held during 26th -31st March 2018.</p>
               <p>❖ Resource Person for Faculty Development Program on “Improving Teaching Skills in Network analysis” organized by Faculty development centre, JNTUK, Kakinada held during 29th October & 2nd November 2018.</p>
               <p>❖ Resource Person for a National Webinar on “IEEE student chapter-Benefits to the students” organized by Dept of EEE, UCEV, JNTUK, Vizianagaram ON 22ND September 2020.</p>
               <p>❖ Resource Person for Two-Day online Workshop on “Communication, VLSI, Image Processing and Design of Antennas (COVID)” organized by Dept of ECE, UCEV, JNTUK, Vizianagaram from 3rd – 4th September 2020.</p>

               <p className="ADsub">Workshops/ Short term courses attended </p>
               <p>❖ Participated in Tutorial on “Fundamentals and advances in MIMO Communication Systems and Networks” by Marco Chaini, University of Bologna, Italy, organized by IEEE Comsoc/SP joint societies chapter, IEEE Hyderabad section at Osmania University, Hyderabad held on 22nd October 2011.</p>
               <p>❖ Participated in “IEEE Hyderabad section Conference Organizers Workshop (IEEEHyd-COW)” AT Visakhapatnam, held on October 2012.</p>
               <p>❖ Participated in Two-Day National Workshop on “Advanced in VLSI Technology” at Dept of ECE, UCEK, JNTUK, Kakinada, held during 26th & 27th April 2013.</p>
               <p>❖ Participated in Three-Day Faculty Development Programme on “Soft skills for effective Teaching” at UCEV, JNTUK, Vizianagaram, held during 13-15 June 2013.</p>
               <p>❖ Participated in Two-Day “Orientation Programme for Faculty” at UCEV, JNTUK, Vizianagaram in association with Indo US Collaboration for Engineering Education (IUCEE) during 16-17 July 2013.</p>
               <p>❖ Participated in “Workshop for Training Resource Persons on Outcome Based Accreditation-Phase I” at UCEV, JNTUK, Vizianagaram, held on 13th September 2013.</p>
               <p>❖ Participated in the One-Day Workshop on Outcome Based Engineering Education organized by UCEV, JNTUK, Vizianagaram, held on 17th February 2013.</p>
               <p>❖ Participated in “Workshop for Training Resource Persons on Outcome Based Accreditation-Phase II” at UCEV, JNTUK, Vizianagaram, held during 26-28th September 2013.</p>
               <p>❖Participated in a Two-day workshop on “Modern Navigation” at R&T Unit for Navigational Electronics, Osmania University, Hyderabad, held during 29th & 30th November 2013.</p>
               <p>❖ Participated in Two-Day National Workshop on “VLSI & EDA TOOLS Technology” at Dept of ECE, UCEV, JNTUK, Vizianagaram, held during 6th & 7th February 2014.</p>
               <p>❖ Participated in a Two-day workshop on “Sparse signal Processing and Compressive Sensing” held at R&T Unit for Navigational Electronics, Osmania University, Hyderabad, held during 19th & 20th December 2014.</p>
               <p>❖ Participated in Symposium on ‘Recent advances in communications, Signal Processing and Navigation” at R&T Unit for Navigational Electronics, Osmania University, Hyderabad, held on 31st July 2015.</p>
               <p>❖ Participated in Three-Day workshop on “Recent advances in Communication and Signal Processing” organized by Dept of ECE, VCE(A), Hyderabad, held during 19th -21st November 2015.</p>
               <p>❖ Participated in UGC Sponsored Refresher Course on “Soft Skills for Professional Excellence” organized by UGC-HRDC center, JNTUH, Hyderabad from 30th Nov 2015 to 19th December 2015.</p>
               <p>❖ Participated in UGC Sponsored “43rd Orientation Programme” organized by UGC-HRDC centre, JNTUH, Hyderabad from 31st August 2015 to 29th September 2015.</p>
               <p>❖ Participated in Two-Day Workshop on “Communication Intelligence Systems” jointly organized by CBIT, DRDO, at CBIT, Hyderabad, held during 25th & 26th October 2016.</p>
               <p>❖ Participated in Two-Day Workshop on “ARM7 & 8051 Microcontroller” organized by UGC-HRDC, at Hyderabad, during 11th & 12th February 2016.</p>
               <p>❖ Participated in Two-Day Workshop on “ARM7 & 8051 Microcontroller” organized by UGC-HRDC, at Hyderabad, during 11th & 12th February 2016.</p>
               <p>❖ Participated in 2nd IEEE Communications Society Summer school held in Trento, Italy, in June 20-23, 2016.</p>
               <p>❖ Participated in One-Day Workshop on “Empowering Teaching Excellence Through E-learning Platforms” organized by JNTUK, Kakinada held on 8th July 2017.</p>
               <p>❖ Participated in MeitY, Govt. of India, Sponsored Faculty development Programme (FDP) on “Fundamentals of Analog and Digital Communication system” jointly organized by Electronics and ICT Academies and dept of ECE, NITW, from 13th May – 22nd May 2017.</p>
               <p>❖ Participated in MeitY, Govt. of India, Sponsored Faculty development Programme (FDP) on “Signal and Image Processing with MATLAB” jointly organized by Electronics and ICT Academies and dept of ECE, SRKR Engg college, Bhimavaram from 3rd July – 8th July 2017.</p>
               <p>❖ Participated in Two-Day National Workshop on “Advanced in Electronics and Communication Engineering” held at Dept of ECE, UCEK, JNTUK, Kakinada, during 26th & 27th</p>
               <p>❖ Participated in “IEEE miniPOCO 2018” A Conference Leadership Training Cum Workshop held at Visakhapatnam on 20th May 2018.</p>
               <p>❖ Participated in AICTE Sponsored Two-Week Faculty Development Programme on “Engineering challenges for Making Digital India: Internet of things and applications”, held at dept of ECE, ANITS, Visakhapatnam from 11th June 2019 to 24th June 2019.</p>
               <p>❖ Participated in Two-Day IEEE workshop on “Channel Coding in 5G” held at MVGR Vizianagaram, during 24th & 25th.</p>
               <p>❖ Participated in One-Day workshop on “EdTech Tools in teaching and Learning” held at Dept of CSE, JNTUK, Vizianagaram, during ON 5th October 2019.</p>
               <p>❖ Participated in the online Faculty Development Program on “Data Science” held by APSSDC, from 1st June to 3oth June 2020.</p>
               <p>❖ Participated in UGC Sponsored online two-week Refresher Course on “Internet of Things” organized by UGC-HRDC centre, JNTUH, Hyderabad from 7th September 2020 to 19th September 2020.</p>
               <p>❖ Participated in AICTE Sponsored One-Week online Short-Term Training Program on “ICT Tools for Engineering College Teaching and Outcome-Based Learning”, held at Dept of ECE, RIT, Visakhapatnam from 5th October 2020 to 10th October 2020.</p>
               <p>❖ Participated in One-Week online Faculty Development Program on “Artificial Intelligence”, held at Dept of IT, Vignan Institute of Engineering for Women in association with NYCI & Brain O Vision solutions India Pvt Ltd from 22nd May 2020 to 26th May 2020.</p>
               <p>❖ Participated in the 5 Days Instructor Led Live Online Faculty Development Program On Artificial Intelligence & Machine Learning Using Python held during 11th- 15th May 2020 Organized by Finland Labs (A Unit of Revert Technology Pvt. Ltd.) In Association with National Social Summit, IIT Roorkee.</p>

               <p className="ADsub">Conference Publications and proceedings </p>
               <p>❖ T S N Murthy and V Akhila Sree, "Analysis of Out-of-Band Interference from UWB Signals to IRNSS Signals," 2020 International Conference on Artificial Intelligence and Signal Processing (AISP), Amaravati, India, 2020, pp. 1-5.</p>
               <p>❖ T S N Murthy, P Naveen Kumar, A D Sarma, K S R S Jyotsna and R P Naraiah, "Preliminary Performance Analysis of IRNSS in Sea Environment”, 20th International Beacon Satellite Symposium 2019, University of Mazury in Olsztyn, Poland, 19-23 August 2019.</p>
               <p>❖ T S N Murthy, Satish Reddyka and K Padmaraju, "Adaptive Secret key Generation in Underwater Acoustic system", IEEE International Conference on Power, control, signals, and Instrumentation Engineering (ICPCSI 2017), 21-22 Sep 2017, Chennai, India.</p>
               <p>❖ T S N Murthyand K Padmaraju, "PAPR Reduction of Alamouti Coded MB-OFDM UWB Signals by using a Phase-offset SLM", IEEE International Conference on Signal Processing, Communications and Embedded system (SCOPES -2016), 3-5 Oct 2016, Odissa, India.</p>
               <p>❖ T S N Murthy and K Deergha Rao, “Performance of MB-OWDM UWB Signals in Rayleigh fading channels” 7th IEEE International Conference on Wireless Communication, Networking and Mobile computing (WICOM 2011), 23-25 Sep. 2011, Wuhan, China.</p>
               <p>❖ T S N Murthy and K Deergha Rao, “Performance of MB-OWDM UWB Signals in Wireless Communications” 2010 IEEE Asia Pacific Conference on Circuits and Systems (APCCAS 2010), 6 – 9 December 2010, Kuala Lumpur, Malaysia.</p>
               <p>❖ T S N Murthy and K Deergha Rao, “PAPR analysis of MB-OWDM UWB Signal in Wireless Communication” IEEE International Conference on Signal Processing (ICSP- 2010), 24-28 Oct. 2010, Beijing, China.</p>
               <p>❖ T S N Murthy and K Deergha Rao, “Tunable Pre-Distorter for PAPR Mitigation in MB-OFDM UWB Signals” 2008 IEEE International Conference on Ultrawideband (ICUWB-2008), Hannover, Germany, Sep-2008.</p>
               <p>❖ K Deergha Rao, and T S N Murthy, “Effect of Filtering and Turbo Coding on the performance of Clipped MB-OFDM UWB signals”, IEEE International Conference on Information Communications and Signal Processing (ICICS-2007), Singapore, Dec 2007.</p>
               <p>❖ K Deergha Rao, and T S N Murthy, “Analysis of Effects of Clipping and Filtering on the Performance of MB-OFDM UWB signals”, IEEE International Conference on Digital Signal Processing (DSP-2007), Cardiff, U.K, July 2007.</p>

               <p className="ADsub">Journal Publications </p>
               <p>❖ K Deergha Rao, and T S N Murthy, “Mitigation of UWB Signals Spectral Leakage to GPS L1 band via Filtering after Clipping in the UWB Transmitter” IETE Journal of Research, Vol.55, Issue-1, Jan-Feb 2009. </p>
               <p>❖ T S N Murthy, and K Deergha Rao, “Effect of PAPR reduction Techniques on the Performance of MB-OFDM UWB signals in Wireless communications” IETE journal of research, Vol.56, Issue-1, Jan-Feb 2010.</p>
               <p>❖ Tejaswi and T S N Murthy, “Performance analysis of clipping technique for PAPR reduction of MB-OFDM UWB Signals” International journal of cybernetics and Informatics (IJCI) Vol.5, No.4, August 2016.</p>  

      </div>
    </div>
  );
}

export default Director;
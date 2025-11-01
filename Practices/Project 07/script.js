function loadContent(page) {
      let content = document.getElementById("content");

      if (page === "about") {
        content.innerHTML = `
          <h2>About ABES Engineering College</h2>
          <p>ABES Engineering College is a premier institution offering B.Tech, MCA, MBA, and other programs...</p>
          <table>
            <tr><th colspan="2">Courses & Fees</th></tr>
            <tr><td>B.Tech</td><td>₹171,600</td></tr>
            <tr><td>MCA</td><td>₹134,000</td></tr>
            <tr><td>MBA</td><td>₹149,000</td></tr>
          </table>`;
      }

      else if (page === "academics") {
        content.innerHTML = `
          <h2>Academics</h2>
          <table>
            <tr><th>Department</th><th>HOD</th><th>Specialisation</th></tr>
            <tr><td>CE</td><td>Dr. Amrita Jyoti</td><td>DSA</td></tr>
            <tr><td>IT</td><td>Dr. Amrita Jyoti</td><td>DAA</td></tr>
            <tr><td>CSE</td><td>Dr. Amrita Jyoti</td><td>Data Analytics</td></tr>
            <tr><td>AIML</td><td>Dr. Amrita Jyoti</td><td>Machine Learning</td></tr>
          </table>`;
      }

       else if (page === "placement") {
        content.innerHTML = `
          <h2>Placement Information</h2>
          <table>
            <tr><th>S.No.</th><th>Company Name</th><th>Student</th><th>Package</th></tr>
            <tr><td>01</td><td>FluiCloud</td><td>Mr. Shlok</td><td>₹44.00 LPA</td></tr>
            <tr><td>02</td><td>Groww</td><td>Utkarsh Singh</td><td>₹20.00 LPA</td></tr>
            <tr><td>03</td><td>Walmart Global Tech</td><td>Vishwajeet Singh</td><td>₹18.50 LPA</td></tr>
            <tr><td>04</td><td>Josh Technology Group</td><td>Deepali Jain</td><td>₹12.93 LPA</td></tr>
            <tr><td>05</td><td>S&P Global</td><td>Ankkush Bhatt</td><td>₹11.00 LPA</td></tr>
          </table>`;
      }

      else if (page === "college") {
        content.innerHTML = `
          <h2>College Gallery</h2>
          <div style="display:flex; flex-wrap:wrap; justify-content:center;">
            <img src="images/01.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/02.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/03.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/04.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/05.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/06.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/07.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/08.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/09.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/10.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/11.jpeg" style="width:180px; height:180px; margin:10px;">
            <img src="images/12.jpeg" style="width:180px; height:180px; margin:10px;">
          </div>`;
      }

      else if (page === "enquiry") {
        content.innerHTML = `
          <h2>Enquiry Form</h2>
          <form onsubmit="event.preventDefault(); alert('Enquiry Submitted!');">
            <label>Name:</label><input type="text" required>
            <label>Email:</label><input type="email" required>
            <label>Message:</label><textarea rows="4" required></textarea>
            <button type="submit" class="btn2">Submit</button>
          </form>`;
      }

      else if (page === "register") {
        content.innerHTML = `
          <h2>Registration Form</h2>
          <form onsubmit="event.preventDefault(); alert('Registration Successful!');">
            <label>Full Name:</label><input type="text" required>
            <label>Email:</label><input type="email" required>
            <label>Course:</label>
            <select required>
              <option value="">Select</option><option>B.Tech</option><option>MCA</option><option>MBA</option>
            </select>
            <label>Mobile:</label><input type="text" pattern="[0-9]{10}" required>
            <button type="submit" class="btn2">Register</button>
          </form>`;
      }

      else if (page === "login") {
        content.innerHTML = `
          <h2>Login</h2>
          <form onsubmit="event.preventDefault(); alert('Login Successful!');">
            <label>Email:</label><input type="email" required>
            <label>Password:</label><input type="password" required>
            <button type="submit" class="btn2">Login</button>
          </form>`;
      }

      else if (page === "profile") {
        content.innerHTML = `
          <h2>User Profile</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Course:</strong> B.Tech</p>`;
      }
    }
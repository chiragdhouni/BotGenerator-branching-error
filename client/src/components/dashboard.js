import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedLog, setSelectedLog] = useState(null);

  const chatbotList = ['Chatbot A', 'Chatbot B', 'Chatbot C', 'Chatbot D'];
  
  const ticketData = [
    { chatbotName: 'Chatbot A', ticketType: 'Bug', createdAt: '2024-09-21', logs: 'View', 
      conversation: `
        User: The button isn't working.
        Bot: Can you describe the issue in more detail?
        User: Sure, when I click on it, nothing happens.
        Bot: Have you tried clearing the cache or restarting the app?
        User: Yes, still not working.
        Bot: I've raised this with our support team. They will look into it.
      `
    },
    { chatbotName: 'Chatbot B', ticketType: 'Feature Request', createdAt: '2024-09-20', logs: 'View', 
      conversation: `
        User: Can you add a dark mode?
        Bot: Thanks for your suggestion! Can you tell me more about why you'd like this feature?
        User: I usually work late, and dark mode would be easier on the eyes.
        Bot: That makes sense! I've forwarded your request to our development team.
        User: Thank you!
        Bot: You're welcome! Feel free to reach out with more suggestions.
      `
    },
    { chatbotName: 'Chatbot C', ticketType: 'Support', createdAt: '2024-09-19', logs: 'View', 
      conversation: `
        User: I can't log in to my account.
        Bot: I see. Have you tried resetting your password?
        User: Yes, but I'm still unable to access.
        Bot: Let me check your account status... It looks like your account was temporarily locked due to multiple failed attempts.
        User: Oh, I see. What can I do now?
        Bot: I've unlocked your account. Please try again, and let me know if it works.
        User: Thanks! It works now.
        Bot: Glad to hear it! Is there anything else I can assist you with today?
      `
    }
  ];

  const containerStyle = {
    backgroundColor: '#334455', // Darker blue background
    padding: '20px',
    height: '100vh',
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    color: '#ffffff'
  };

  const navBarStyle = {
    width: '220px',
    backgroundColor: '#222222',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.5)',
    fontSize: '16px'  // Reduced font size for better visibility
  };

  const navItemStyle = {
    color: '#ffffff',
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#445566',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '14px'  // Reduced size for nav items
  };

  const dashboardStyle = {
    marginLeft: '30px', // Shift the dashboard to the right
    flexGrow: 1,
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '30px', // Reduced font size for better balance
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#f8f9fa',
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
  };

  const statBoxStyle = {
    backgroundColor: '#556677',
    flex: '1',
    height: '130px', // Slightly reduced height
    margin: '0 10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    fontSize: '16px', // Adjusted font size
    fontWeight: 'bold',
    color: '#ffffff',
  };

  const tableStyle = {
    width: '100%',
    backgroundColor: '#223344',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const tableHeaderStyle = {
    backgroundColor: '#445566',
    padding: '10px',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '14px' // Adjusted font size for table headers
  };

  const tableRowStyle = {
    borderBottom: '1px solid #dddddd',
    padding: '10px',
    color: '#ffffff',
    fontSize: '14px'  // Adjusted font size for table rows
  };

  const buttonStyle = {
    backgroundColor: '#445566',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px'  // Adjusted font size for the button
  };

  const logBoxStyle = {
    backgroundColor: '#556677',
    padding: '26px',
    borderRadius: '5px',
    marginLeft: '20px',
    width: '400px', // Expanded width for longer logs
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    whiteSpace: 'pre-line',
    fontSize: '14px', // Font size for logs
    color: '#e0e0e0'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <h3 style={{ color: '#f8f9fa', fontSize: '18px' }}>Chatbots</h3> {/* Adjusted font size */}
        {chatbotList.map((chatbot, index) => (
          <div key={index} style={navItemStyle}>
            {chatbot}
          </div>
        ))}
      </div>

      {/* Main Dashboard */}
      <div style={dashboardStyle}>
        {/* Header */}
        <div style={headerStyle}>DASHBOARD</div>

        {/* Stats at the top */}
        <div style={statsContainerStyle}>
          <div style={statBoxStyle}>Total Tickets</div>
          <div style={statBoxStyle}>Open Tickets</div>
          <div style={statBoxStyle}>Closed Tickets</div>
          <div style={statBoxStyle}>Pending Tickets</div>
        </div>

        {/* Tickets Raised Table */}
        <div style={tableStyle}>
          <h3 style={{ marginBottom: '20px', fontSize: '16px' }}>Tickets Raised</h3> {/* Adjusted font size */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Chatbot Name</th>
                <th style={tableHeaderStyle}>Ticket Type</th>
                <th style={tableHeaderStyle}>Created At</th>
                <th style={tableHeaderStyle}>Logs</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((ticket, index) => (
                <tr key={index}>
                  <td style={tableRowStyle}>{ticket.chatbotName}</td>
                  <td style={tableRowStyle}>{ticket.ticketType}</td>
                  <td style={tableRowStyle}>{ticket.createdAt}</td>
                  <td style={tableRowStyle}>
                    <button 
                      style={buttonStyle}
                      onClick={() => setSelectedLog(ticket.conversation)}
                    >
                      View Logs
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logs Display Section */}
      {selectedLog && (
        <div style={logBoxStyle}>
          <h4 style={{ fontSize: '16px' }}>Conversation Log</h4> {/* Adjusted font size */}
          {selectedLog}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

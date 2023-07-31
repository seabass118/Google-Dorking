export function App() {
	return (
		<div className="bg-gray-800 min-h-screen p-10">
			<div className="font-bold text-3xl text-emerald-300 pb-10">
				Unveiling the Hidden Web:<br></br> Mastering the Art of Google
				Dorking
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">
				Introduction
			</div>
			<div className="text-white pb-10">
				In the age of digital information, search engines have become
				powerful tools that help users find the content they need
				quickly. Google, being the most popular search engine, holds
				vast amounts of data from websites worldwide. While this
				accessibility is convenient, it can also expose web applications
				and sensitive information to potential threats. One technique
				that malicious actors exploit is known as "Google Dorking." In
				this article, we will dive deep into Google Dorking, understand
				its implications, explore its impact on web security, and learn
				how to protect your web applications from potential risks.
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">
				Understanding Google Dorking
			</div>
			<div className="text-white pb-10">
				Google Dorking, also referred to as "Google Hacking," is the
				process of using advanced search operators to perform specific,
				targeted searches on Google. These search operators enable users
				to narrow down their search results and find information that
				might not be readily available through regular searches. While
				Google Dorking can be a useful tool for ethical hackers and
				security researchers, it can also be exploited by malicious
				actors to find sensitive information and vulnerabilities in web
				applications.
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">
				The Impact of Google Dorking on Web Security
			</div>
			<div className="text-white pb-10">
				The potential impact of Google Dorking on web security is
				significant. Malicious actors can use specific search queries to
				uncover sensitive data, such as login credentials, exposed
				databases, confidential documents, and other sensitive
				information. This information can be used to launch further
				attacks, compromise web applications, or even conduct social
				engineering attacks on unsuspecting users.
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">
				Protecting Web Applications from Google Dorking
			</div>
			<div className="text-white pb-10">
				As web developers, it's essential to protect your applications
				from potential Google Dorking attacks. Here are some key
				strategies to consider:<br></br>
				<br></br> <span className="text-emerald-300">A. </span>Proper
				Authentication and Authorization: Implement robust
				authentication and authorization mechanisms to ensure that only
				authorized users can access sensitive data and perform critical
				actions within your web application.<br></br>
				<br></br>
				<span className="text-emerald-300">B. </span>Secure
				Configuration: Avoid exposing sensitive directories or files
				through the web server's configuration. Ensure that any
				sensitive information is properly secured and only accessible to
				authenticated users with the appropriate permissions.<br></br>
				<br></br>
				<span className="text-emerald-300">C. </span>
				Implement Robots.txt: Use the "robots.txt" file to instruct
				search engine crawlers on which parts of your website they
				should not index. This will help prevent sensitive data from
				being exposed in search results.<br></br>
				<br></br>
				<span className="text-emerald-300">D. </span>Monitor for Exposed
				Information: Regularly conduct security audits and vulnerability
				assessments to identify any information that might be exposed
				through Google Dorking. Implement processes to remediate any
				discovered issues promptly.
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">
				Google Dorking Examples
			</div>
			<div className="text-white pb-6">
				Check out this{" "}
				<a
					className="text-emerald-300 underline"
					href="https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06"
				>
					repository
				</a>{" "}
				for more information
			</div>
			<div className="text-white pb-10">
				<div className="bg-gray-900 w-max p-3 rounded mb-6">
					intext:"PRIVATE_KEY" site:"www.github.com"
				</div>
				<div className="pb-6">
					The "intext" filter searches for the occurrences of keywords
					all at once or one at a time. The "site" filter specifically
					searches that particular site and lists all the results for
					that site. This dork will return all open-source files/projects on GitHub that 
                    contain "PRIVATE_KEY" which is common within enviroment files aka ".env" files. This is 
                    where sensitive information is stored.
				</div>

                <div className="text-emerald-300 font-bold pb-6">
                    More Examples:
                </div>
                <div className="bg-gray-900 w-max p-3 rounded mb-6">
                    inurl:service.pwd
				</div>
                <div className="bg-gray-900 w-max p-3 rounded mb-6">
                    inurl:url ext:pHp
				</div>
                <div className="bg-gray-900 w-max p-3 rounded mb-6">
                    bp blog admin" intitle:login | intitle:admin
				</div>
                <div className="bg-gray-900 w-max p-3 rounded mb-6">
                    index of /private" -site:net -site:com -site:org
				</div>
                <div className="bg-gray-900 w-max p-3 rounded mb-6">
                    !Host=*.* intext:enc_UserPassword=* ext:pcf
				</div>
			</div>

			<div className="font-bold text-xl text-emerald-300 pb-2">Conclusion:</div>
			<div className="text-white pb-10">Google Dorking is a powerful technique that can be both beneficial and dangerous. While it can aid ethical hackers and researchers in identifying vulnerabilities and enhancing web security, it can also serve as a gateway for malicious actors to exploit sensitive information and compromise web applications.

As web developers, it is crucial to understand the implications of Google Dorking and take proactive steps to protect our web applications from potential threats. By implementing secure coding practices, proper authentication, and authorization mechanisms, and staying vigilant in monitoring and securing our web applications, we can safeguard sensitive data and create a more resilient online environment for all users. Remember, ethical hacking empowers us to build a safer digital world for everyone.</div>
		</div>
	);
}

const BlogName = prompt('Enter your Blog Name');
const ContactEmail = prompt('Enter your Contact Email');
console.log(BlogName);
alert(`Hi, your ${BlogName}. Terms of Use is Created. Click Ok to see`);
document.querySelector('html').innerHTML = `


<h2>Terms Of Use</h2>



<p>Before using ${BlogName} please read our Terms of Use carefully. If you do not agree with these Terms of Use, then you are not authorized to use these ${BlogName} blog. By using this ${BlogName} blog you are agreeing to be bound by these Terms of Use.</p>



<h4>Use of the Blog</h4>



<p>You may use this blog for non-commercial purpose only.The blog is for knowledge and informational purpose only.</p>



<h4>Acceptable Use Policy</h4>



<p>${BlogName} Blog expects all of it’s users give respect to other people. If you notice any unacceptable behavior from any user. You are free to report such activity to a ${BlogName} Blog at ${ContactEmail}.</p>



<h4>Comment Policy</h4>



<p>${BlogName} Blog welcome comment and encourage them on our blog. Following are the reason due to which comment will be edited or deleted.</p>



<p>Any types of spam advertising comment will be deleted.</p>



<p>Comment that attack personal individually will be deleted.</p>



<p>Only Topic relevant links is permitted in comment.</p>



<p>Comment should be relevant to post topic.</p>



<p>The owner have full right to edited or deleted all published comment to this blog without notice.</p>



<p>These comment policy changed at any time without notice.</p>



<h4>Content Copyrights Policy</h4>



<p>Do not use our content for commercial purpose.</p>



<p>Do not copy or reproduce our content on other blog or website.</p>



<h4>No Warranties Policy</h4>



<p>The Owner of this blog makes no representations as to the accuracy or completeness of any information on this blog.</p>



<p>The Owner of the blog is not liable for any types of error or omissions.</p>



<p>The Owner of the blog is not liable for injuries, losses, or damages.</p>



<h4>Modification</h4>



<h4>These Terms of Use change at any time without notice.</h4>



<h4>Also read our Privacy Policy</h4>



<h4>If you have any question about our Terms of Use please contact us at ${ContactEmail}.</h4>

`;

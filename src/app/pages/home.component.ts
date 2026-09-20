import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="hero">
  <div class="eyebrow">SOFTWARE • AUTOMATION • DIGITAL PLATFORMS</div>
  <h1>Make the <em>work flow.</em></h1>
  <p class="hero-copy">Software designed around the way your business actually operates — turning manual processes into clearer, more connected working systems.</p>
  <div class="actions"><a class="button primary" routerLink="/contact">Discuss an idea</a><a class="button ghost" routerLink="/work">Explore the work →</a></div>
  <div class="proof"><span>Web & mobile</span><span>Payments & integrations</span><span>Cloud-ready</span><span>Real operational workflows</span></div>
</section>
<section class="statement"><p class="section-kicker">THE PROBLEM</p><h2>When spreadsheets, WhatsApp, email and manual admin start running the workflow, it's time to consider a system.</h2></section>
<section class="section">
  <div class="section-head"><div><p class="section-kicker">WHAT WE EXPLORE</p><h2>Practical software for real operations.</h2></div><p>Start with the business problem. Explore how a workflow can become a clearer, more controlled digital system.</p></div>
  <div class="cards">
    <article><span>01</span><h3>Business systems</h3><p>Internal platforms for users, roles, records, approvals, reporting and day-to-day operations.</p></article>
    <article><span>02</span><h3>Customer portals</h3><p>Secure experiences where customers can register, submit requests, track progress and manage information.</p></article>
    <article><span>03</span><h3>Workflow automation</h3><p>Turn repetitive handoffs, notifications, approvals and reconciliation into controlled digital workflows.</p></article>
    <article><span>04</span><h3>Payments & integrations</h3><p>Connect payment providers, identity services, APIs, databases and third-party platforms.</p></article>
    <article><span>05</span><h3>Mobile applications</h3><p>Extend a workflow beyond the office with focused mobile experiences for customers and operational teams.</p></article>
    <article><span>06</span><h3>Modernisation</h3><p>Replace fragile legacy systems or disconnected processes without throwing away what already works.</p></article>
  </div>
</section>
<section class="section dark">
  <div class="section-head"><div><p class="section-kicker">SELECTED WORK</p><h2>Built around transactions, operations and people.</h2></div><p>Projects exploring fintech, marketplaces and operational software.</p></div>
  <div class="projects">
    <article class="project featured"><div class="project-top"><span>FINTECH / MARKETPLACE</span><span>01</span></div><h3>SecureX</h3><p>A peer-to-peer transaction platform exploring escrow workflows, KYC, payments, auditability and controlled fund release.</p></article>
    <article class="project"><div class="project-top"><span>MARKETPLACE / OPERATIONS</span><span>02</span></div><h3>DoForYou</h3><p>A task marketplace exploring role-based access, payments, task workflows, notifications, disputes and mobile experiences.</p></article>
    <article class="project"><div class="project-top"><span>TRANSPORT / OPERATIONS</span><span>03</span></div><h3>TaxiConnect</h3><p>Operational tooling exploring routes, operators, vehicles, drivers, trips, passenger demand and incidents.</p></article>
  </div>
</section>
<section class="section"><p class="section-kicker">HOW IT WORKS</p><h2>From business problem to working software.</h2><div class="steps"><div><strong>01</strong><h3>Understand</h3><p>Map the current process, users, pain points and business rules.</p></div><div><strong>02</strong><h3>Design</h3><p>Define the workflows, data, screens and technical foundation.</p></div><div><strong>03</strong><h3>Build</h3><p>Deliver the highest-value capabilities in manageable phases.</p></div><div><strong>04</strong><h3>Operate</h3><p>Deploy, monitor, improve and support the system as it evolves.</p></div></div></section>
<section class="cta"><div><p class="section-kicker">START WITH THE PROBLEM</p><h2>Describe the workflow you want to improve.</h2><p>You don't need a technical specification. Explain the process, the problem or the outcome you want to explore.</p></div><a class="button light" routerLink="/contact">Start a conversation →</a></section>
`
})
export class HomeComponent {}

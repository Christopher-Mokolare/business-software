import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero"><p class="section-kicker">CAPABILITIES</p><h1>Software ideas shaped around the operational problem.</h1><p>Explore the kinds of systems, automation and digital experiences that can be designed around the way a business works.</p></section>
<section class="section"><div class="page-grid">
<a class="solution-card" routerLink="/solutions/business-systems"><span>01</span><h3>Business systems</h3><p>Internal platforms for users, roles, records, approvals, reporting and day-to-day operations.</p><strong>Explore solution →</strong></a>
<a class="solution-card" routerLink="/solutions/customer-portals"><span>02</span><h3>Customer portals</h3><p>Secure experiences where customers can register, submit requests, track progress and manage information.</p><strong>Explore solution →</strong></a>
<a class="solution-card" routerLink="/solutions/workflow-automation"><span>03</span><h3>Workflow automation</h3><p>Turn repetitive handoffs, notifications, approvals and reconciliation into controlled digital workflows.</p><strong>Explore solution →</strong></a>
<a class="solution-card" routerLink="/solutions/payments-integrations"><span>04</span><h3>Payments & integrations</h3><p>Connect payment providers, identity services, APIs, databases and third-party platforms.</p><strong>Explore solution →</strong></a>
<a class="solution-card" routerLink="/solutions/mobile-applications"><span>05</span><h3>Mobile applications</h3><p>Extend a workflow beyond the office with focused mobile experiences for customers and operational teams.</p><strong>Explore solution →</strong></a>
<a class="solution-card" routerLink="/solutions/modernisation"><span>06</span><h3>Modernisation</h3><p>Replace fragile legacy systems or disconnected processes without throwing away what already works.</p><strong>Explore solution →</strong></a>
</div></section>
<section class="cta"><div><p class="section-kicker">NOT SURE WHERE TO START?</p><h2>Start with the process, not the technology.</h2><p>Describe what is slow, manual, disconnected or difficult and explore what a software solution could look like.</p></div><a class="button light" routerLink="/contact">Start a conversation →</a></section>
`
})
export class ServicesComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero"><p class="section-kicker">CAPABILITIES</p><h1>Software ideas shaped around the operational problem.</h1><p>Explore the kinds of systems, automation and digital experiences that can be designed around the way a business works.</p></section>
<section class="section"><div class="page-grid">
<article><span>01</span><h3>Business management systems</h3><p>Users, roles, records, approvals, dashboards and operational workflows in one controlled system.</p></article>
<article><span>02</span><h3>Customer & staff portals</h3><p>Secure self-service experiences for customers, employees, suppliers and partners.</p></article>
<article><span>03</span><h3>Workflow automation</h3><p>Digitise repetitive handoffs, notifications, approvals, reconciliation and exception handling.</p></article>
<article><span>04</span><h3>Payments & integrations</h3><p>Connect payment providers, identity verification, external APIs, databases and business tools.</p></article>
<article><span>05</span><h3>Mobile applications</h3><p>Focused mobile experiences for customers and operational teams who work away from a desk.</p></article>
<article><span>06</span><h3>Legacy modernisation</h3><p>Move fragile or disconnected systems forward while protecting the parts of the workflow that already work.</p></article>
</div></section>
<section class="cta"><div><p class="section-kicker">NOT SURE WHERE TO START?</p><h2>Start with the process, not the technology.</h2><p>Describe what is slow, manual, disconnected or difficult and explore what a software solution could look like.</p></div><a class="button light" routerLink="/contact">Start a conversation →</a></section>
`
})
export class ServicesComponent {}

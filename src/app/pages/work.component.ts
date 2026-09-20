import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero"><p class="section-kicker">SELECTED WORK</p><h1>Production-minded software across real workflows.</h1><p>Examples of platforms built around transactions, marketplaces and operational coordination.</p></section>
<section class="section dark"><div class="projects">
<article class="project featured"><div class="project-top"><span>FINTECH / MARKETPLACE</span><span>01</span></div><h3>SecureX</h3><p>Peer-to-peer transaction software built around escrow, KYC, payments, auditability and controlled fund release.</p><div class="tags"><b>ASP.NET Core</b><b>Angular</b><b>PostgreSQL</b><b>AWS</b></div></article>
<article class="project"><div class="project-top"><span>MARKETPLACE / OPERATIONS</span><span>02</span></div><h3>DoForYou</h3><p>Task marketplace capabilities covering roles, tasks, payments, notifications, disputes and operational administration.</p><div class="tags"><b>.NET</b><b>Angular</b><b>Mobile</b></div></article>
<article class="project"><div class="project-top"><span>TRANSPORT / OPERATIONS</span><span>03</span></div><h3>TaxiConnect</h3><p>Transport operations tooling for routes, operators, vehicles, drivers, trips, passenger demand and incidents.</p><div class="tags"><b>Firebase</b><b>JavaScript</b><b>Operations</b></div></article>
</div></section>
<section class="section"><p class="section-kicker">THE COMMON THREAD</p><h2>Systems designed around users, data, rules and accountability.</h2><p class="hero-copy">The stack changes with the problem. The focus stays on reliable workflows, clear interfaces and software that can operate in production.</p><a class="button primary" routerLink="/contact">Discuss your project →</a></section>
`
})
export class WorkComponent {}

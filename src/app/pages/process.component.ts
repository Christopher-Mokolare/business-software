import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page-hero"><p class="section-kicker">PROCESS</p><h1>From business problem to working software.</h1><p>A structured approach keeps the business outcome visible while the technical foundation grows underneath it.</p></section>
<section class="section"><div class="steps"><div><strong>01</strong><h3>Understand</h3><p>Map the current process, users, pain points, constraints and business rules.</p></div><div><strong>02</strong><h3>Design</h3><p>Define workflows, data, screens, permissions and the technical foundation.</p></div><div><strong>03</strong><h3>Build</h3><p>Deliver the highest-value capabilities in manageable phases with regular feedback.</p></div><div><strong>04</strong><h3>Operate</h3><p>Deploy, monitor, improve and support the system as requirements evolve.</p></div></div></section>
<section class="section"><p class="section-kicker">ONGOING</p><h2>Software needs attention after it is built.</h2><div class="list"><article><h3>Monitoring & reliability</h3><p>Watch availability, errors, infrastructure and operational signals.</p></article><article><h3>Security & maintenance</h3><p>Handle dependency updates, configuration changes and security-focused maintenance.</p></article><article><h3>Improvements</h3><p>Continue adding useful capabilities as users and business requirements evolve.</p></article></div></section>
<section class="cta"><div><p class="section-kicker">START WITH THE WORKFLOW</p><h2>Bring the messy process. Explore what it could become.</h2></div><a class="button light" routerLink="/contact">Start a conversation →</a></section>
`
})
export class ProcessComponent {}

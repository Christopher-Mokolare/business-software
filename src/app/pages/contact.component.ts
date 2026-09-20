import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
<section class="page-hero"><p class="section-kicker">START HERE</p><h1>Let's talk about the business, not the buzzwords.</h1><p>You don't need a technical specification. Tell us what is manual, slow, disconnected or difficult.</p></section>
<section class="section contact">
<div><p class="section-kicker">WHAT TO INCLUDE</p><h2>A useful first conversation starts with the workflow.</h2><p class="hero-copy">Tell us what the business does, who uses the process, what currently happens and what you want to improve.</p></div>
<form action="mailto:hello@mokolare.co.za" method="post" enctype="text/plain">
<label>Business / organisation<input name="business" required placeholder="Your business name"></label>
<label>Contact email<input type="email" name="email" required placeholder="you@company.co.za"></label>
<label>What would you like to improve?<textarea name="problem" required placeholder="Tell us what is currently manual, slow, disconnected or difficult."></textarea></label>
<button class="button primary" type="submit">Send enquiry</button>
</form>
</section>
`
})
export class ContactComponent {}

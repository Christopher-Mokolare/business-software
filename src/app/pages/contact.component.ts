import { Component } from '@angular/core';

const CONTACT_API_URL = 'https://cm-portal-contact.onrender.com/api/contact';

@Component({
  standalone: true,
  template: `
<section class="page-hero"><p class="section-kicker">START HERE</p><h1>Let's talk about the business, not the buzzwords.</h1><p>You don't need a technical specification. Tell us what is manual, slow, disconnected or difficult.</p></section>
<section class="section contact">
<div><p class="section-kicker">WHAT TO INCLUDE</p><h2>A useful first conversation starts with the workflow.</h2><p class="hero-copy">Tell us what the business does, who uses the process, what currently happens and what you want to improve.</p></div>
<form (submit)="submit($event)" #contactForm>
<label>Business / organisation<input name="business" required placeholder="Your business name"></label>
<label>Contact email<input type="email" name="email" required placeholder="you@company.co.za"></label>
<label>What would you like to improve?<textarea name="problem" required placeholder="Tell us what is currently manual, slow, disconnected or difficult."></textarea></label>
<button class="button primary" type="submit" [disabled]="submitting">{{ submitting ? 'Sending…' : 'Send enquiry' }}</button>
<p [hidden]="!status" role="status">{{ status }}</p>
</form>
</section>
`
})
export class ContactComponent {
  submitting = false;
  status = '';

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.submitting) return;

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const business = String(data.get('business') || '').trim();
    const email = String(data.get('email') || '').trim();
    const problem = String(data.get('problem') || '').trim();

    this.submitting = true;
    this.status = '';

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: business,
          email,
          subject: 'Business software enquiry',
          message: problem
        })
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || 'The enquiry could not be sent.');
      }

      form.reset();
      this.status = 'Thanks — your enquiry has been sent.';
    } catch (error) {
      this.status = error instanceof Error
        ? error.message
        : 'The enquiry could not be sent. Please try again.';
    } finally {
      this.submitting = false;
    }
  }
}

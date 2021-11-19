import styles from './pricing-table.module.scss'
import { CgCheck } from "@react-icons/all-files/cg/CgCheck";


export function PricingTable() {

  return (
    <div className={styles.pricingTable}>
      <div className={styles.pricingItem}>
        <span />
        <h2>Base</h2>
        <p><small>Get your smooth and custom website with our core features.</small></p>
        <span>149</span>
        <span>189</span>
        <button className="btn-secondary">
          <a href="https://buy.stripe.com/6oE2bt9ms7wV6JyfZ1" target="_blank">Get Started</a>
        </button>
        <ul>
          <li>
            <CgCheck />Custom website
            <span>
              Get a superb and custom website. Beautiful design, accessible, easy to use, conversion focused, secure and fast loading.
            </span>
          </li>
          <li>
            <CgCheck />Blog ready
            <span>
              Create and publish great content and boost your traffic and sales with our custom blog ready to use.
            </span>
          </li>
          <li>
            <CgCheck />Brand style guide
            <span>
              We include setup for a custom brand guidelines. You can use this style guide tool on
              all your business channels if you want to.
            </span>
          </li>
          <li>
            <CgCheck />SEO optimization
            <span>
              Don’t waste time trying to figure out SEO.We handle it for you. Keyword research, technical setup, local listing suggestions and more…
            </span>
          </li>
          <li>
            <CgCheck />Stock Photos
            <span>A variety of over 200 Million creative and inspiring assets to build the best website ever.</span>
          </li>
          <li>
            <CgCheck />Analytics
            <span>With Google Analytics you have the tools you need to better understand your customers.</span>
          </li>
          <li>
            <CgCheck />Security
            <span>
              24/7 security monitoring. Malware removal & hacks cleanups. Firewal protection, SSL certificates included and forcing HTTPS.
            </span>
          </li>
          <li>
            <CgCheck />Hosting included
            <span>
              Premier web hosting package powered by DigitalOcean and CloudFlare.We include setup for a Global Content Delivery Network (CDN).
            </span>
          </li>
          <li>
            <CgCheck />Software updates
            <span>
              WordPres, plugins, theme and core files always kept up to date.
            </span>
          </li>
          <li>
            <CgCheck />Integrations
            <span>
              Bring and integrate all of your favorites tools and systems to your website.
            </span>
          </li>
          <li>
            <CgCheck />Weekly Backups
            <span>
              Weekly backups stored in the cloud, so you always have a save point to go back to incase of emergencies.
            </span>
          </li>
          <li>
            <CgCheck />Premium plugins
            <span>
              We use the best plugins for security, backups, speed optimization, and more! You can get access to all of them with any of our plans.
            </span>
          </li>
          <li>
            <CgCheck />14-day money back guarantee
            <span>
              Try our service risk free. No questions asked.
            </span>
          </li>
          <li>
            <CgCheck />Cancel anytime
            <span>
              No long contracts. All our plans are a monthly basis.
            </span>
          </li>
          <li>
            <CgCheck />Basic support
          </li>
        </ul>
      </div>
      <div className={styles.pricingItem}>
        <span>recomended</span>
        <h2>Unlimited</h2>
        <p><small>Improve, add and update new content constantly.</small></p>
        <span>199</span>
        <span>249</span>
        <button className="btn-secondary">
          <a href="https://buy.stripe.com/eVacQ756ceZnec0001" target="_blank">Get Started</a>
        </button>
        <span>Everything on Base +</span>
        <ul>
          <li>
            <CgCheck />Unlimited tasks
            <span>
              Add unlimited tasks to your task queue.
            </span>
          </li>
          <li>
            <CgCheck />Unlimited revisions
            <span>
              We’ll revise the task until you’re 100% satisfied.
            </span>
          </li>
          <li>
            <CgCheck />1 active task at a time
            <span>
              Add as many tasks as you would like to your design quueue, then we will work through them one by one.
            </span>
          </li>
          <li>
            <CgCheck />Priority support
            <span>
              With priority support, your support requests go to the top of the queue so you’ll get help faster.
            </span>
          </li>
          <li>
            <CgCheck />E-commerce
            <span>
              Manage products, customers, payments and orders.
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.pricingItem}>
        <span />
        <h2>Premier</h2>
        <p><small>For those who needs processing high volumes of updates quickly.</small></p>
        <span>279</span>
        <span>349</span>
        <button className="btn-secondary">
          <a href="https://buy.stripe.com/5kAaHZ7ek3gF3xm6oq" target="_blank">Get Started</a>
        </button>
        <span>Everything on Unlimited +</span>
        <ul>
          <li>Concurrent tasks


          </li>
          <li>
            <CgCheck />A/B Testing
            <span>
              A/B testing is the process of comparing differents variants of a web page to determine the best options for you business.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
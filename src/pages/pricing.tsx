import styles from "./pricing.module.scss"
import { PricingTable } from "../components/PricingTable"

export default function Pricing() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.content}>
          <div className={styles.title}>
            <h1>Simple, straightfoward pricing.</h1>
            <p>Choose the plan that’s right for your brand. Whether you’re just getting started with your first website, updating or modernizing it, there’s a plan for you.</p>
            <p><small>🚀 Launch offer • 20% off membership for 3 months </small></p>
          </div>

          <PricingTable />

          <div className={styles.pricingContent}>
            <p>Pay $129 per month for the first 2 months on the Unlimited and Primer plans. *</p>
            <span><small>* except for online stores</small></span>
          </div>
        </section>
      </main>
    </>
  )
}
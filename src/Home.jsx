import React from "react";
import { Helmet } from "react-helmet";
import Footer from './Footer';
import Navbar from './Navbar';
import { useUser } from "./UserContext";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
function Home() {
	const { user } = useUser();
	return (
		<div class="home">
			<Navbar />
			<Helmet>
				<meta name="viewport" title="Home" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
			</Helmet>

			<header class="py-3 mt-0">
				<div class="container px-5">
					<div class="row gx-5 justify-content-center">
						<div class="col-lg-6">
							<div class="text-center mt-5">
								<h1 class="display-5 fw-bolder mb-1">Welcome to XYZ Bank</h1>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section class="border-bottom" id="features">
				<div class="container px-4 my-4">
					<div class="row gx-5">
						<div class="col-lg-4 mb-5 mb-lg-0 bg-white border border-secondary">
							<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
							<h2 class="h4 fw-bolder">1. Secure Transactions</h2>
							<p>Your security is our top priority. Rest assured that your transactions are protected by advanced encryption and security measures.</p>
						</div>
						<div class="col-lg-4 mb-5 mb-lg-0 bg-white border border-secondary">
							<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
							<h2 class="h4 fw-bolder">2. Easy Transfers</h2>
							<p>Transfer funds between your accounts or send money to family and friends with just a few clicks. It's quick, convenient, and hassle-free.</p>
						</div>
						<div class="col-lg-4 mb-5 mb-lg-0 bg-white border border-secondary">
							<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
							<h2 class="h4 fw-bolder">3. Account Overview</h2>
							<p>View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
						</div>
					</div>
				</div>
			</section>

			<section class="border-bottom">
				<div class="container px-4 my-4 px-4">
					<div class="text-center mb-5">
						<h2 class="fw-bolder">User testimonials</h2>
						<p class="lead mb-0">Our users love working with us</p>
					</div>
					<div class="row gx-5 justify-content-center">
						<div class="col-lg-6">
							<div class="card mb-4">
								<div class="card-body p-4">
									<div class="d-flex">
										<div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
										<div class="ms-4">
											<p class="mb-1">Thank you for putting together such a great product. Will be recommending you to others!</p>
											<div class="small text-muted">- User Name, Location</div>
										</div>
									</div>
								</div>
							</div>

							<div class="card">
								<div class="card-body p-4">
									<div class="d-flex">
										<div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
										<div class="ms-4">
										<p class="mb-1">Thank you for putting together such a great product. Will be recommending you to others!</p>
											<div class="small text-muted">- User Name, Location</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
export default Home;
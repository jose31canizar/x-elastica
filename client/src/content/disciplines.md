##Disciplines
<h3 id='advanced-finite-element-simulations'>Advanced Finite Element Simulations</h3>
>We apply State of the Art finite element proprietary codes to perform nonlinear, transient analyses of 2D and 3D structures. Our core codes are described below.

<h3 id='performance-based-earthquake-engineering'>Performance Based Earthquake Engineering</h3>
>###Classification
***

>• Classification based on hazard type


>• Hydrological (e.g. flooding)


>• Seismic (e.g. earthquake, liquefaction)


>• Aging (e.g. AAR, corrosion)

>• Multi-hazard!



<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/multi_hazard.png')}/>}}</pre>

>###Performance Based Earthquake Engineering
***
>###Terminology

>• Performance-Based Engineering (PBE) is defined as consisting of the selection of design criteria, appropriate structural systems, layout, proportioning, and detailing for a structure and its non-structural components and contents, and the assurance and control of construction quality and long-term maintenance, such that at specified levels of all the excitation and with defined levels of reliability, the structure or facility will not be damaged beyond certain limit states [Bertero 2002].

>• Performance-Based Earthquake Engineering (PBEE) is defined as the application of PBE to the case that seismic hazard controls the design. Therefore, PBEE involves the complete design, construction and control (monitoring) of the maintenance and function of the structure to assure that the constructed structures will resist the effects of earthquake ground motions with different severity within specified limiting levels of damage [Bertero 2000].


>• In the US, interest in performance based seismic design initiated in the 1980s among engineers engaged in seismic retrofit of existing buildings.
>• Based on Structural Engineers Association of California (SEAOC) Vision 2000 the first step in PBEE is the definition and selection of the performance objectives.

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/SEAOC.png')}/>}}</pre>

>###First Generation of PBEE

>• First Generation of PBEE (also known as PBEE-1) is shown conceptually in the following figure and it is assumed that a structure is loaded by earthquake-induced lateral forces that produce nonlinear response in structural components.


<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/PBEE1.png')}/>}}</pre>

>###Second Generation of PBEE

>• In 1997 the Pacific Earthquake Engineering Research Center (PEER) decided to develop a more robust methodology for performance-based earthquake engineering, called as next generation PBEE (also called as PBEE-2 or PEER PBEE).

>• The PEER PBEE framework developed by PEER facilitates direct calculation of the effects of uncertainty and randomness on each step in the performance based procedure [Porter 2003].


<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/PBEE2.png')}/>}}</pre>

>• PBEE-2 can be expressed in terms of a triple integral that is an application of the total probability theorem:
<div class='equation'>
g[DV|D] = &#x222b; &#x222b; &#x222b; p [DV|DM,D] p [DM|EDP,D] p [EDP|IM,D] dIM dEDP dDM
</div>

>###Seismic Hazard Analysis
***
>Seismic design of many structures, especially critical infrastructures such as nuclear power plants (NPP) and dams needs to a clear vision on seismic potential of the region that the structure is going to be constructed. Parameters such as importance of the structure, risk of the failure, financial concerns, and even the technological problems may affects the method of the seismic hazard analysis.

>###Location and Site Condition
>>• Earthquake shaking hazards are dependent on site location with respect to seismic sources and, regional and site-specific geologic characteristics. Seismic source is characterized by identification of all the potential earthquake sources. Earthquake sources typically are either faults or areal seismic source zones. Local topographic conditions (e.g., hills, valleys, canyons) can also modify the character of shaking.

>>• It is assumed here that the dam is founded on rock or hard rock. Rock is defined here consistently with ASCE 7-10 Section 20.3, as having shear wave velocity of 760 m/s to 1520 m/s. Hard rock is defined here as having a minimum shear wave velocity of 1520 m/s. As a minimum, it will be necessary to have sufficient data to characterize the Site Class in accordance with the ASCE 7-10 Standard so that site coefficients can be assigned. This information will generally include the depth, classification and shear wave velocity of materials in the soil column above bedrock, if the dam is not founded on rock or hard rock. Alternatively, the main parameters of site condition, i.e. average shear wave velocity at top 30 m of the soil/rock column, depth to 1.0 km/s shear wave velocity, and depth to 2.5 km/s shear wave velocity are required.

>>• Attenuation relationships are used to derive acceleration response spectra for use in Scenario-Based Performance Assessment and also form the basis for probabilistic seismic hazard analysis (PSHA) used to develop the hazard curves needed for Time-Based Performance Assessment. Attenuation relationships provide estimated values of ground shaking intensity parameters, such as peak ground acceleration (PGA), peak ground velocity (PGV) and spectral response acceleration at particular structural periods, Sa(Ti), for user-specified combinations of earthquake magnitude and site-to-source distance.


>>• Probabilistic Seismic Hazard Analysis (PSHA) uses the elements of the deterministic one and adds an assessment of the likelihood that ground motions of a given magnitude would occur. The probability or frequency of occurrence of different magnitude earthquakes on each significant seismic source and inherent uncertainties are directly accounted for in the analysis. The possible occurrence of each magnitude earthquake at any part of a source is directly incorporated in a PSHA. The results of a PSHA are used to select the design earthquake ground motion parameters.

>###Seismic Hazard Curves
>>• The fundamental outcome of a PSHA is the seismic hazard curve, which shows the annual rate or probability at which a specific ground motion level will be exceeded at the dam site.

>>• In any hazard curve, the vertical axis presents annual probability of exceedence (or return period), and the horizontal axis is intensity measure (IM) parameter.

>>• Seismic hazard curves are usually an important and useful tool in risk analysis of dams.

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/hazard_prob_sample.png')}/>}}</pre>

>###Seismic Hazard De-Aggregation
>>• Seismic hazard de-aggregation plots are useful since they can provide a clear vision on contribution of the different parameters in record selection process. Also they can be used for the source identification controlling the hazard at the dam site.


>>• The modal distance, magnitude, and inter-event term can be found in this plot.


<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/pga_2.png')}/>}}</pre>


>###Ground Motion Selecting and Scaling
>>• One spectrum is required for each of the several seismic hazard intervals used for analysis which are selected from the site seismic hazard curve. Three types of spectra are acceptable:
>>>• Uniform Hazard Spectra (UHS)
>>>• Conditional Mean Spectra (CMS)
>>>• Conditional Spectra (CS)

>>• Two sample ground motion records with acceleration time histories, velocity and Arias intensity time histories are shown in the following figure. Note that the blue part belongs to the strong ground motion which includes 90% of Arias intensity.
<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/472FN.png')}/>}}</pre>
<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/2871FN.png')}/>}}</pre>

>###Structural Analysis
***

>###Cloud Analysis
>>• CLA is a procedure in which first a dam is subjected to a (relatively large) set of (un-scaled or as-recorded) ground motions and is analyzed numerically.
>>• If the ground motion records are taken from a bin, they can represent an earthquake scenario defined by (Mbin, Rbin), the magnitude and distance representative of the bin. Then, from the results, EDP vs. IM are determined and form the so-called cloud response.
>>• CLA method usually is used in conjunction with probabilistic seismic demand analysis (PSDA).

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/cloud_sample.png')}/>}}</pre>

>###Incremental Dynamic Analysis
>>• IDA is a dynamic procedure in which first a set of N ground motions are selected. Each ground motion is scaled successively to multiple IM levels.
>>• Each of the scaled ground motions are then applied to the dam separately and the maximum EDP is computed.
>>• A single-record IDA curve connects the resulting EDPs corresponding to each ground motion.
>>• Finally, a multiple-record IDA curve is developed, which is a group of N single-record IDA curves.
>>• A full IDA procedure for each ground motion results dam failure under high scale factors. It corresponds to a flat-line in IDA curve.
>>• The IDA method has the capability to extract probabilistic information that describes the global instability collapse limit state of the dam.

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/IDA_sample.png')}/>}}</pre>

>###Multiple Stripe Analysis
>>• MSA is a procedure in which a set of m seismic intensity levels (SIL) or stripes are selected first.
>>• If m = 1 or 2, this method is called single- or double-stripe analysis (SSA/DSA), respectively.
>>• Each stripe in this method corresponds to a specific SIL and it is possible to perform a probabilistic seismic hazard analysis (PSHA) for each one separately. Consequently, N different ground motions may be selected for each of the m stripes.
>>• The resulted m * N ground motions are then used for nonlinear transient analyses of the dam and the EDPs are computed.


<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/MSA_sample.png')}/>}}</pre>

>###Endurance Time Analysis
>>• All the CLA, IDA and MSA methods require large number of nonlinear dynamic analyses and are computationally demanding for dam-reservoir-foundation system.
>>• ETA is a dynamic pushover procedure which estimates the seismic performance of the dam when subjected to limited number of pre-designed intensifying excitation, which are called endurance time acceleration functions (ETAF).
>>• The ETAFs are aimed to shake the dam from a low excitation level — with a response in the elastic range — to a medium excitation level — where the dam experiences some nonlinearity — and finally to a high excitation level, which causes the failure. All these responses ranges are experienced in a single time history analysis.


<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/ETA_sample.png')}/>}}</pre>

>###Fragility Analysis
***

>• In general, a "fragility function" expresses the probability that an undesirable event will occur as a function of the value of some (potentially uncertain) environmental excitation.
>• Fragility curve is a continuous function showing the probability of exceedance of a certain limit state (LS) for specific level of ground motion intensity measure (IM)

<div class='equation'>Fragility = P [LS | IM = im]</div>
<div class='equation'>or,</div>
<div class='equation'>Fragility = P [EDP >= edp | IM = im]</div>

>• They can be 2D (scalar) or 3D (vector-valued). Fragility curves can be used to show the probability of exceedance of any LS conditioned on PGA or first-mode spectral acceleration. On the other hand, fragility surfaces show the probability of exceedance conditioned on two intensity measures and since they are more accurate.

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/surface_IM_IM.png')}/>}}</pre>

>###Loss Analysis and Decision-Making
***

>###Dam Safety
>• There are various agencies that have established risk-based dam safety decision guidelines. Risk management encompasses activities related to making risk-informed decisions, prioritizing evaluations of risk, prioritizing risk reduction activities, and making program decisions associated with managing a portfolio of facilities. Risk management includes evaluating the environmental, social, cultural, ethical, political, and legal considerations of all parts of the decision process.

<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/Dam-Safety.png')}/>}}</pre>

>• Risk assessment is "the process of deciding whether existing risks are tolerable and present risk control measures are adequate and if not, whether alternative risk control measures are justified or will be implemented. Risk assessment incorporates the risk analysis and risk evaluation phases".

>• Risk assessment encompasses activities including risk analyses and the decisions resulting from individual risk analyses. This typically involves developing and evaluating potential failure modes, coordinating supporting engineering studies, developing structural loads, risk analysis, consequence analysis, and recommendations to support decisions. There is some overlap between risk assessment and risk management as they are both integral in decision-making.

>###Tolerable Risks
>• In order to evaluate tolerable risks using quantitative risk estimates, numeric tolerable risk thresholds or guidelines have been developed by several agencies.
>• Specifically related to dams, four entities have extensive information that relate directly to tolerable risks for water resources facilities - HSE, ANCOLD, and the New South Wales Dam Safety Committee (NSW DSC).
>• In addition, the Canadian Dam Association (CDA) and the U.S. Bureau of Reclamation (USBR) have developed tolerable risk guidelines, which are similar.
>###U.S. Bureau of Reclamation
>• Reclamation uses two guidelines to assess dam safety risk, 1) "Annualized Failure Probability", which serves to fulfill the public trust responsibility associated with agency exposure as a result of dam failures, and 2) "Annualized Life Loss", where multiple fatalities are possible as the result of dam failure.

>>• Annualized Failure Probability: There is no such thing as a dam with zero chance of failure. However, the probability of dam failure must be very low. Reclamation terms this measure of risk Annualized Failure Probability, and uses a guideline of 1 in 10,000 per year for the accumulation of failure likelihoods from all PFMs that would result in life-threatening unintentional release of the reservoir.


>>• Annualized Life Loss: Reclamation defines the risk as Annualized Life Loss, and uses a guideline of 0.001 fatalities per year to address it. When the mean estimate is above the guideline of 0.001 fatalities per year, there is generally greater need to take action to reduce or better understand the risks. There is generally decreasing need to reduce or better understand the risks when they are below this guideline value. The primary means to portray risks is a risk curve that relates frequency f (mean number of events per year) of N or more fatalities, as a function of N (f-N chart).



<pre>{{<img src={require('../img/disciplines/performance-based-earthquake-engineering/USBR.png')}/>}}</pre>

<h3 id='probabilistic-and-statistical-analyses'>Probabilistic and Statistical Analyses</h3>
>###Contents
***
>>Classification

>>Terminology

>###Classification
***
>###Classification based on analysis type
>• Analytical solutions which are usually obtained by direct mathematical concept in mechanics. They are limited to simple geometry and boundary conditions.

>• Simplified methods are the approximate solutions already calibrated based on experimental test or vast finite element analyses. They are useful for preliminary design and analysis purposes.



>• Linear elastic finite element analyses are widely used for numerically simulation of complex structures. Results from linear elastic analysis is useful as long as there is no major nonlinearity in the structure and the stresses are with the material strength.



>• Nonlinear finite element analyses are the most advance and powerful tools for numerically evaluation of any type of structures, interaction of systems, nonlinearities, etc. They are usually used for failure assessment of structural systems.


>###Classification based on project needs
>• Deterministic analysis (DA) in which a single analysis is performed based on overall observations from the test. The analysis type may be simplified, linear or nonlinear finite element simulation.


>• Sensitivity analysis (SA) is based on group on N linear or nonlinear finite element simulations in order to find the most sensitive random variables in the structural system.


>• Design of Experiments (DOE) is a systematic method to build a meta-model based on only limited linear or nonlinear finite element simulations.



>• Uncertainty Quantification (UQ) is a general term used for probabilistic assessment of structural system based on either linear or nonlinear finite element simulations. It is used in the case that one or more random variables in the system are not known priori.



<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/analysis_complexity-1.png')}/>}}</pre>

>###Terminology
***
>###What is the project goal?
>• There are different terms dealing with safety assessment of structures and infra-structures. One may clearly defines the project goal and select the required tools to reach the goal.



>• Be careful about the words you choose. Not all of them have the same meaning in technical language! However, most of them are connected to each other to some extent.



<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/connection_prob_concept-1.png')}/>}}</pre>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/terminology-1.png')}/>}}</pre>

>• Hazard refers to an uncertain relationship between some level of (seismic, aging, hydrological) intensity measure and the frequency or probability of a particular location experiencing at least that level of demand.


>• Risk can be defined as: "Measure of the probability and severity of an adverse effect to life, health, property, or environment". Risk assessment is the process of deciding whether existing risks are tolerable and if not, whether alternative risk control measures are justified or will be implemented.
<pre>Risk = ∫ P [Load Events] × P [Responses | Loads] × C [Responses , Loads]</pre>
<pre>where P is the conditional probability and C stands for the consequences.</pre>

>• Fragility is a continuous function showing the probability of exceedance of a certain limit state (LS) for a specific level of ground motion IM, im:
<div class='equation'>Fragility = P [LS | IM ≥ im]</div>

>• Vulnerability is different from fragility. The former measures loss (in terms dollars, deaths, and downtime) while the latter measures probability. A vulnerability curve expresses the loss as a function of IM. Three major types of vulnerability curves are:
>>>• Measuring repair cost

>>>• Measuring life safety

>>>• Measuring downtime

>• Reliability: Structural reliability analysis deals with the quantitative assessment of the failure probability, given a model of the uncertainty in the structural, environmental and load parameters. It estimates the structural safety and can be used in a decision process. It is evaluated based on capacity (R) and demand (S) as:
<div class='equation'>Z = R - S</div>

>• Resilience: Community resilience is the ability to prepare and plan for, absorb, recover from, and more successfully adapt to actual or potential adverse events. Resilience also is defined as a normalized function indicating capability to sustain a level of functionality or performance, Q(t) , for a given dam or lifeline over a life cycle time.

<div class='equation'>Resilience(%) = ∫ <sub>t0</sub> <super>tRE</super> Q(t) / t<sub>RE</sub> dt</div>
<div class='image-title'>Hazard</div>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/hazard_sample-1.png')}/>}}</pre>
<div class='image-title'>Risk</div>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/risk_sample-1.png')}/>}}</pre>
<div class='image-title'>Fragility</div>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/fragility_sample-1.png')}/>}}</pre>
<div class='image-title'>Vulnerability</div>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/vulnerability_sample-1.png')}/>}}</pre>
<div class='image-title'>Reliability</div>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/reliability_sample-1.png')}/>}}</pre>
<div class='image-title'>Resilience</div>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/resilience_sample-1.png')}/>}}</pre>


>###Probabilistic Assessment
***
>###Classification of Random Variables
The random variables (RVs) can be categorized as:
>• Epistemic uncertainty is the scientific uncertainty in the model of the process and is due to limited data and knowledge. Usually is addressed through a logic tree.


>• Aleatory variability is the natural randomness in a process. For continuous variables, the randomness is parameterized by the PDF.



>• The basic qualifier refers to directly observable quantities such as material properties (e.g. strength), loads (e.g. earthquake magnitude), environmental phenomenons (e.g. AAR), and geometric dimensions (section size).

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Epistemic_aleatory-1.png')}/>}}</pre>

>###Sensitivity Analysis
>• Sensitivity analysis (SA) determines the impact of a variation in an input parameter on output results. Mathematically, this corresponds to the partial derivative of the output function with respect to an input parameter at a given design point. The response for X = (X1, X2, ..., Xn) RVs can be expressed as
<div class='equation'>θ = f( X<sub>1</sub> , X<sub>2</sub> , ... , X<sub>n</sub> )</div>

>• 2n+1 analyses are performed using mean, minimum and maximum RV values. Finally, the results are dorted in descending form which builds a so-called "Tornado diagram".

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Tornado_Diagram-1.png')}/>}}</pre>

>###Design of Experiments
>• By definition, design of experiments (DOE) refers to a statistical technique systematically defines the minimum (or efficient) number of experimental sampling points to optimize the computed or observed responses.
>• There are different techniques to build a DOE: Randomized Complete Block Design, Latin Square Experimental Design, Full Factorial Design, Fractional Factorial Design, Central Composite Design, Box-Behnken Experimental Design, Plackett-Burman Experimental Design, Taguchi Experimental Design. Some of them are shown in the following figure:



<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/DOE.png')}/>}}</pre>

>• DOEs are then used to construct a meta-model.


>• Meta-model is, in fact, model of the model. In this technique the complex finite element model is substituted by an analytical limit state function. This technique facilitates operation of probabilistic procedure.


>###Why Do We Need Uncertainty Analysis?
>• The input factors are not always known with a sufficient degree of certainty.
>• Their uncertainty is often expressed in terms of probability distributions.
>• The following figures show the bi-variate probability density function (PDF) and its cumulative density function (CDF).

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_PDF-1.png')}/>}}</pre>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_CDF-1.png')}/>}}</pre>

>• The uncertainties of input parameters may have dependencies on each other.
>• In the following plots the most left one shows "negative partial correlation", the second one presents "zero correlation", the third one shows "positive partial correlation" and the most right one represents the "positive full correlation" among the X and Y random variables.

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_corr_n050-1.png')}/>}}</pre>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_corr_000-1.png')}/>}}</pre>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_corr_p050-1.png')}/>}}</pre>
<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Bivariate_corr_p070-1.png')}/>}}</pre>

>###Sampling Techniques
>• Truly are those exhibiting "true randomness", which is difficult (if not impossible) to generate through machines.
>• Pseudo random sequences are those appearing to show randomness yet nevertheless exhibit a specific, repeatable pattern. They have been generated by applying a set of rules.
>>• Crude Monte Carlo Simulation (CMCS)

>>• Latin Hypercube Sampling (LHS)

>• Quasi random (sub-random) sequences are generated from a completely deterministic, low-discrepancy process and possess no inherent statistical properties. Discrepancy is a metric for the degree of non-uniformity of numbers in a sequence.
>>• Halton sequence

>>• Sobol sequence

>• The following figures compare four sampling techniques (two from pseudo-random and two from quasi-random methods). Two sampling sizes were studied in order to reveal the impact of population on distribution uniformity. All the cases consist of two-dimensional random variables with a uniform distribution of zero mean and unit standard deviation.

<div class='image-title'>N<sub>sim</sub> = 100</div>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/four_sampling_100-1.png')}/>}}</pre>

<div class='image-title'>N<sub>sim</sub> = 400</div>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/four_sampling_500-1.png')}/>}}</pre>

>###Cross Correlation
>• In real-world problem, usually there is a degree of correlation among the individual RVs (e.g. concrete modulus of elasticity and compressive strength).


>• Correlation between two RVs (which varies from 0.0 to 1.0) is usually obtained from experimental test or from literature.


>• The following plot shows cross-correlation among 10 different RVs used to formulate an advance cohesive crack model. The diagonal arrays show individual histograms, while the off-diagonal ones are cross-correlations.

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/joint_Corr_matrix-1.png')}/>}}</pre>

>###Spatial Correlation
>• Spatial variability of structural properties (i.e. material properties) is very important which can have substantial impact on the structural damage and failure (e.g. crack initiation and localization in homogeneous stress state region)


>• Correlation length, ζ, is the key parameter which shows the spatial dependency of structural material properties to each other.


>• Smaller correlation length (with respect to model dimensions) means that there is more non-uniformity in the system.



>• Three realizations of the random fields with three different correlation length for AAR expansion in concrete, ε∞AAR , in a large (60m × 15m) are shown in this figure.

<div class='image-title'>ζ = 2 m</div>
  <div class='equation'>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d201-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d202-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d203-1.png')}/>}}</pre>
  </div>
<div class='image-title'>ζ = 10 m</div>
  <div class='equation'>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d1001-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d1002-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d1003-1.png')}/>}}</pre>
  </div>
<div class='image-title'>ζ = 20 m</div>
  <div class='equation'>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d2001-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d2002-1.png')}/>}}</pre>
    <pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/d2003-1.png')}/>}}</pre>
  </div>


>###Temporal Correlation
>• Temporal uncertainties are related to time-dependent variability and can be considered in two levels: 1) temporal prediction (uncertainty in future states) and 2) temporal retrodiction (uncertainty in past state).


>• Annual average temperature at different years in a specific location (Left plot) have degree of correlation.


>• Temporal correlation in concrete elastic modulus of an AAR-affected structure over 100 years time period (right plot) is shown by three precision.
<div class='image-title'>Temperature Correlation</div>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/COTemp-report_Large-1.png')}/>}}</pre>

<div class='image-title'>Degradation Correlation</div>

<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/Beta_Ec_r-1.png')}/>}}</pre>

>###Statistical Assessment
***
The random variables (RVs) can be categorized as:
>###Multiple Linear Regression Analysis

>• Multiple linear regression (MLR) is the extension of simple linear regression (SLR) to the case of multiple explanatory variables (which may or may not be truly independent). Hence, rather than modeling the mean response as a straight line, as in simple regression, it is now modeled as a function of several explanatory variables.

>• Multiple explanatory variables are required when scientific knowledge and experience tells us they are likely to be useful.

<div class='equation'>y = β<sub>0</sub> + Σ<super>n</super> <sub>i=1</sub> β<sub>i</sub> x<sub>i</sub> + ε</div>

>• How can we decide what variables to include? Following Ockham's razor among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected. In the context of MLR this means that a model with fewer parameters is to be preferred to one with more. However, this needs to be weighed against the ability of the model to actually predict anything.
>• Two particular statistical models can be considered:

>>• Akaike Information Criterion (AIC) which is based on maximum likelihood and a penalty for each parameter

>>• Schwartz's Bayesian information criterion (BIC) is similar to AIC, but penalizes additional parameters more.

>• The following table shows a sample of MLR on a AAR affected concrete structures. Different parameters are statistically investigated, e.g. type, size, degree of expansion, reinforcement ratio, degree of degradation, etc. Three models are compared: general, AIIC, and BIC. For each one the estimated coefficient, its standard deviation, significance and etc. are shown.


<pre>{{<img src={require('../img/disciplines/probabilistic-and-statistical-analyses/AIC_BIS_NED-1.png')}/>}}</pre>

###Concrete Deterioration

###Complex Laboratory Testing
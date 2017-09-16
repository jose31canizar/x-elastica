##Projects
<br>
<br>
<h3 id='nuclear-containment-vessel-structures'>Nuclear Containment Vessel Structures</h3>

>###Capacity of AAR-Affected Shear Wall
***
>###Test Description
Reported mechanical properties of concrete
<br>
<br>
>###Dimensions of the Shear Wall
<br>
<br>
>###Parameter Identification: Kinetics
>• We have a model, but which parameters to use?
<br>
<br>
>Calibration from data (above) at 260 days
<br>
<br>

<pre>Matlab: τ<sub>c</sub> = 81 days, τ<sub>l</sub> = 61 days, and ε∞<sub>AAR</sub> = 0.22%.</pre>

>>• Note: Expansion relatively small

>Prediction for 1000 days
<br>
<br>
>• Assumed a uniform distributional model ranging from a minimum 0.25% and a maximum of 0.45%.
<br>
<br>
>• Latin Hypercube sampling (LHS) technique
<br>
<br>
>• Simulations = 100 curves
<br>
<br>
>• Least-squares optimizations
<br>
<br>
>###Parameter Identification: Deterioration
<br>
<br>
>• E and f't at time t0 and t260 are given.
<br>
<br>
>• Need to predict values ar t1000.
<br>
<br>
>• Using these values a normal distribution model is assumed with the reported values as mean, and a COV and
<br>
<br>
>• A set of 100 values of τ<sub>l</sub> and τ<sub>c</sub>, degradation curves are obtained.
<br>
<br>
>###Finite Element Model
<br>
<br>
Mesh
<br>
<br>
Load
>###Results: Calibration
<br>
<br>
>• Used mean values for SW and SW-260
<br>
<br>
>• Found response to be too stiff.
<br>
<br>
>• We recognize experimental uncertainties and attributed this discrepancy to 'slack' in the system
<br>
<br>
>• Exercise 'our right' to calibrate
<br>
<br>
>• All displacements are simply multiplied by 2.3
<br>
<br>
>###Results: Failure Mode
<br>
<br>
>• Structural response under cyclic displacement (without ASR).
>• Deformed shapes; Contour: max. principal strains
>• Crack propagation in web and columns
<br>
<br>
>###Results: Sensitivity Analyses
<br>
<br>
>• n=15 RVs are retained. Thus, 2n+1=31 analyses are required.
<br>
<br>
>• Capacity curves: experimental curve falls within the range of results.
<br>
<br>
>• Tornado Diagram: Results sorted.
<br>
<br>
>• The most important parameters are retained as variables, the others are retained as constants.
Can now proceed with an "intelligent" LHS-based Uncertainty Quantification

>###Automation of Probabilistic Analysis
<br>
<br>
>• p1.m: Input data definition, RV selection, probability distributional models, ranges, and correlation coefficients; Generation of FE meshes.
<br>
<br>
>• p2.m: Execute finite element code (Merlin)
<br>
<br>
>• p3.m: Data mining
<br>
<br>
>• p4.m: Summary results
<br>
<br>
>• Plot desired responses. For each output parameter, results are plotted along with their mean, 16 and 84 fractiles ranges (which correspond to minus and plus one standard deviation in a log-normal distributional model).
<br>
<br>
>###Results: Time-Dependent AAR Effect
<br>
<br>
>• Frequency and cross-correlation shown. SW and SW-1000 exhibit similar (relative) trend for capacity increase or decease.
<br>
<br>
>• About 60% of the analysis the shear capacity was reduced by the pre-existence of ASR, and in about 40% it increased.
<br>
<br>
>• No definite answer as to whether AAR increases or reduces the shear strength.
<br>
<br>
>• This requires further investigation.
>###Aleatory-Epistemic-Temporal UQ of NCVS
***
>####A to Z
<br>
<br>
>• NVCS with soil-structure interaction, AAR, material and joint nonlinearities, uncertainty quantification, time-dependent capacity and fragility curves, possibly incorporate loss analysis, risk assessment and decision making.
<br>
<br>
>####Some Deterministic Results
<br>
<br>
>• Displacement results under self-weight and AAR expansion.
<br>
<br>
>• Cracked area under AAR expansion.
<br>
<br>

<h3 id='concrete-dams'>Concrete Dams</h3>

>###SA and UQ of Cohesive Crack Model
***
>###Mode I and II Fracture Mechanics: Sensitivity Assessment
>• Simulations: 2*14+1=35 displacement control pushover alalyses are performed.
>####Mode I and II: Uncertainty Quantification

>###Aleatory UQ in Gravity Dams
***
  >###Dam and Selected Ground Motions
  >• 2D FEM of dam-reservoir-foundation coupled system with interface joint.
  >• n = 100 ground motions are selected for the analyses.
  >• Unconditional ground motion selection (large n).
  >###Fragility Curves
  >• Cloud-based fragility curves and surfaces are derived.
  >• Local vs. global indices for limit state.
>###Epistemic UQ in Gravity Dams
***
  >###Parametric Probability of Failure
  >• Reliability of the system is evaluated with MCS-based failure probability:
  Pfmean = G (H1, B1, RV (μ, σ))

<h3 id='bridges'>Bridges</h3>

>###Epistemic-Temporal UQ in AAR-affected Viaduct
***

>###Description
>• The Viaduct de Chillon is a precast post-tensioned bridge spanning between 92 m and 104 m over a total length of 2120 m
>• The French double-cantilever construction system was used with precast voussoirs.
>###AAR Expansion Properties
<br>
<br>
>• Nonlinear concrete properties are similar to those in shear wall model.
<br>
<br>
>• AAR model parameters are:
<br>
<br>
>###Degree of AAR non-uniformity
<br>
<br>
>• Uniform
<br>
<br>
>• Partial Non-uniform
<br>
<br>
>• Fully Non-uniform
<br>
<br>
Uniform Fully Non-uniform
<br>
<br>
>###System Identification: Theory
<br>
<br>
>• How to determine the kinetics and deterioration for real-world problems?
<br>
<br>
>• Three types of uncertainties are incorporating: past, present, future.
<br>
<br>
>• Petrographer estimates the past expansion.
<br>
<br>
>• Accelerated AAR experiment gives information about future expansion.
<br>
<br>
>• Engineer combines these two; uses optimization techniques to get full curve.
<br>
<br>
>###System Identification: Application
<br>
<br>
>• Trapezoidal uncertainty is assumed in the future.
<br>
<br>
>• LHS is used with 121 simulations.
Kinetics Deterioration
>###Effect of Kinetics (classification)
<br>
<br>
>• Class I: The great 'distortion' of the section with much flexure in both the flanges but also the web.
<br>
<br>
>• Class II: The vertical elongation of the web is clearly dominant, resulting in smaller curvatures in the web.
<br>
<br>
>• Black solid circle and square corresponds to major cracking.
<br>
<br>
>###Probabilistic Based Conditional Assessment
<br>
<br>
>• 55% os models fall into class I and 45% in class II.
<br>
<br>
>• Conditional probability is shown as well as 16, 50 and 84\% fractiles.
<br>
<br>
>• Central fractiles of Class I case displacement are (assuming LS = 50 mm and target displacement = 10 mm, then DI = 0.2)

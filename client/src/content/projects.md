##Projects
<br>
<br>
<h3 id='nuclear-containment-vessel-structures'>Nuclear Containment Vessel Structures</h3>

>###Capacity of AAR-Affected Shear Wall
***
>###Test Description
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/test_setup-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/test_setup-2-1.png')}/>}}
</pre>

Reported mechanical properties of concrete
<br>
<br>
<pre>
<div class='image-title'>SW</div>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/test-results-A-1.png')}/>}}
<div class='image-title'>SW-260</div>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/test-results-ASR-A1-1.png')}/>}}
<div class='image-title'>Envelope</div>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/exp_push_Comp-1.png')}/>}}
</pre>

>###Dimensions of the Shear Wall
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/model_2-1.png')}/>}}
</pre>

>###Parameter Identification: Kinetics
>• We have a model, but which parameters to use?
<br>
<br>
>Calibration from data (above) at 260 days
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Expansion_optim_260-1.png')}/>}}
</pre>

<div class='equation'>Matlab: τ<sub>c</sub> = 81 days, τ<sub>l</sub> = 61 days, and ε∞<sub>AAR</sub> = 0.22%.</div>

>>• Note: Expansion relatively small

>Prediction for 1000 days
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/ASR_Prediction_1000-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/ASR_Prediction_ft-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/ASR_Prediction_E-1.png')}/>}}
</pre>

>###Finite Element Model
<br>
<br>
Mesh
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/FE_mesh-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/mesh_reinf-1.png')}/>}}
</pre>

Load
>###Results: Calibration
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Model_BC-1.png')}/>}}
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/applied_disp_2-1.png')}/>}}
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/applied_disp_1-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Deterministic_NOASR-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Deterministic_ASR-1.png')}/>}}
</pre>

>###Results: Failure Mode
<br>
<br>
>• Structural response under cyclic displacement (without ASR).
>• Deformed shapes; Contour: max. principal strains
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Def_shape-1.png')}/>}}
</pre>

>• Crack propagation in web and columns
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Crack_propagation-1.png')}/>}}
</pre>

>###Results: Sensitivity Analyses
<br>
<br>
>• n=15 RVs are retained. Thus, 2n+1=31 analyses are required.
<br>
<br>
>• Capacity curves: experimental curve falls within the range of results.
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Sensitivity_NOASR-1.png')}/>}}
</pre>

>• Tornado Diagram: Results sorted.
<br>
<br>
>• The most important parameters are retained as variables, the others are retained as constants.
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Sensitivity_Tornado-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/File_Structure-1.png')}/>}}
</pre>

>• Plot desired responses. For each output parameter, results are plotted along with their mean, 16 and 84 fractiles ranges (which correspond to minus and plus one standard deviation in a log-normal distributional model).
<br>
<br>
>###Results: Time-Dependent AAR Effect
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/SW_vs_SWD_3D0-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/SW_vs_SWD_CDF-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/Boulder_1-1.png')}/>}}
</pre>

>####Some Deterministic Results
<br>
<br>
>• Displacement results under self-weight and AAR expansion.
<br>
<br>
>• Cracked area under AAR expansion.
<br>
<br>
<pre>
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/npp_stress-1.png')}/>}}
{{<img src={require('../img/projects/nuclear-containment-vessel-structures/npp_crack-1.png')}/>}}
</pre>

<h3 id='concrete-dams'>Concrete Dams</h3>

>###SA and UQ of Cohesive Crack Model
***
>###Mode I and II Fracture Mechanics: Sensitivity Assessment
>• Simulations: 2*14+1=35 displacement control pushover alalyses are performed.
<br>
<br>
<pre>
<div class='image-title'>Mode I</div>
{{<img src={require('../img/projects/concrete-dams/senst_mode_1_025_POA-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/senst_mode_1_025_tornado-1.png')}/>}}
</pre>
<pre>
<div class='image-title'>Mode II</div>
{{<img src={require('../img/projects/concrete-dams/senst_mode_2_025_POA-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/senst_mode_2_025_tornado-1.png')}/>}}
</pre>

>####Mode I and II: Uncertainty Quantification
<pre>
<div class='image-title'>Mode I (with correlated random variables)</div>
<div class='equation'>
{{<img src={require('../img/projects/concrete-dams/uncert_mode_1_Corr-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/uncert_mode_1_Corr_desp-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/fragility_mode_1_Corr-1.png')}/>}}
</div>
</pre>
<pre>
<div class='image-title'>Mode I (with uncorrelated random variables)</div>
<div class='equation'>
{{<img src={require('../img/projects/concrete-dams/uncert_mode_1_NoCorr-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/uncert_mode_1_NoCorr_desp-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/fragility_mode_1_NoCorr-1.png')}/>}}
</div>
</pre>
<pre>
<div class='image-title'>Mode II (with correlated random variables)</div>
<div class='equation'>
{{<img src={require('../img/projects/concrete-dams/uncert_mode_2_Corr-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/uncert_mode_2_Corr_desp-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/fragility_mode_2_NoCorr-1.png')}/>}}
</div>
</pre>
<pre>
<div class='image-title'>Mode II (with uncorrelated random variables)</div>
<div class='equation'>
{{<img src={require('../img/projects/concrete-dams/uncert_mode_2_NoCorr-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/uncert_mode_2_NoCorr_desp-1.png')}/>}}
{{<img src={require('../img/projects/concrete-dams/fragility_mode_2_Corr-1.png')}/>}}
</div>
</pre>

>###Aleatory UQ in Gravity Dams
***
  >###Dam and Selected Ground Motions
  >• 2D FEM of dam-reservoir-foundation coupled system with interface joint.
  <pre>
  {{<img src={require('../img/projects/concrete-dams/pineflat-monolith-1.png')}/>}}
  </pre>
  <pre>
  {{<img src={require('../img/projects/concrete-dams/dam_modal-1.png')}/>}}
  </pre>

  >• n = 100 ground motions are selected for the analyses.
  >• Unconditional ground motion selection (large n).
  <pre>
  {{<img src={require('../img/projects/concrete-dams/R_M_Vs30-1.png')}/>}}
  </pre>
  <pre>
  {{<img src={require('../img/projects/concrete-dams/Sa_T-1.png')}/>}}
  </pre>

  >###Fragility Curves
  >• Cloud-based fragility curves and surfaces are derived.
  >• Local vs. global indices for limit state.
  <pre>
  {{<img src={require('../img/projects/concrete-dams/PSDM_fragility_joint_comp-1.png')}/>}}
  </pre>
  <pre>
  {{<img src={require('../img/projects/concrete-dams/PSDM_fragility_IM_3D_1-1.png')}/>}}
  </pre>
  <pre>
  {{<img src={require('../img/projects/concrete-dams/PSDM_fragility_DI_comp-1.png')}/>}}
  </pre>
  <pre>
  {{<img src={require('../img/projects/concrete-dams/PSDM_fragility_DI_3D_2-1.png')}/>}}
  </pre>

>###Epistemic UQ in Gravity Dams
***
  >###Parametric Probability of Failure
  >• Reliability of the system is evaluated with MCS-based failure probability:
  <div class='equation'>P<sub>f</sub><super>mean</super> = G (H<sub>1</sub>, B<sub>1</sub>, RV (μ, σ))</div>
  <pre>
  <div class='image-title'>L<sub>cr</sub></div>
  {{<img src={require('../img/projects/concrete-dams/Pf_3D_Lcr-1.png')}/>}}
  <div class='image-title'>H<sub>w</sub></div>
  {{<img src={require('../img/projects/concrete-dams/Pf_3D_Hw-1.png')}/>}}
  <div class='image-title'>c<sub>rc</sub></div>
  {{<img src={require('../img/projects/concrete-dams/Pf_3D_coh-1.png')}/>}}
  <div class='image-title'>φ<sub>rc</sub></div>
  {{<img src={require('../img/projects/concrete-dams/Pf_3D_phi-1.png')}/>}}
  <div class='image-title'>eff<sub>D</sub></div>
  {{<img src={require('../img/projects/concrete-dams/Pf_3D_effD-1.png')}/>}}
  </pre>

<h3 id='bridges'>Bridges</h3>

>###Epistemic-Temporal UQ in AAR-affected Viaduct
***

>###Description
>• The Viaduct de Chillon is a precast post-tensioned bridge spanning between 92 m and 104 m over a total length of 2120 m
>• The French double-cantilever construction system was used with precast voussoirs.
<pre>
{{<img src={require('../img/projects/bridges/viaduc_image-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/FE_mesh-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/bridges/unif_deformation-1.png')}/>}}
{{<img src={require('../img/projects/bridges/P-Nonunif_deformation-1.png')}/>}}
{{<img src={require('../img/projects/bridges/F-Nonunif_deformation-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/crack_unif-1.png')}/>}}
{{<img src={require('../img/projects/bridges/crack_p_nonunif-1.png')}/>}}
{{<img src={require('../img/projects/bridges/crack_F_nonunif-1.png')}/>}}
</pre>

Uniform Fully Non-uniform
<br>
<br>
<pre>
{{<img src={require('../img/projects/bridges/determ_para_2-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/U_reinf_4-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/bridges/AAR_1-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/AAR_2-1.png')}/>}}
</pre>

>###System Identification: Application
<br>
<br>
>• Trapezoidal uncertainty is assumed in the future.
<br>
<br>
>• LHS is used with 121 simulations.
Kinetics Deterioration
<pre>
{{<img src={require('../img/projects/bridges/Original_uncert-1.png')}/>}}
{{<img src={require('../img/projects/bridges/Beta_Ec_r-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/method_2_uncert-1.png')}/>}}
{{<img src={require('../img/projects/bridges/Beta_ft_r-1.png')}/>}}
</pre>

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
<pre>
{{<img src={require('../img/projects/bridges/Chillon_1_def_new-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/Chillon_2_def_new-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/comp_1_AAR-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/comp_2_AAR-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/comp_12_stress-1.png')}/>}}
</pre>

>###Probabilistic Based Conditional Assessment
<br>
<br>
>• 55% os models fall into class I and 45% in class II.
<br>
<br>
>• Conditional probability is shown as well as 16, 50 and 84\% fractiles.
<br>
<br>
<pre>
{{<img src={require('../img/projects/bridges/prob_displ_x_15-1.png')}/>}}
</pre>
<pre>
{{<img src={require('../img/projects/bridges/prob_stress_xx_1-1.png')}/>}}
</pre>

>• Central fractiles of Class I case displacement are (assuming LS = 50 mm and target displacement = 10 mm, then DI = 0.2)

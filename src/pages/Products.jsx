import { useState } from "react";
import { Link } from "react-router-dom";

const optimizeImage = (url) =>
    url.replace("/upload/", "/upload/w_400,q_auto,f_auto/");

const categories = [
    {
        title: "Fittings",
        items: ["Buttwelded", "Forged Socketwelded", "Forged Threaded"],
    },
    {
        title: "Pipes",
        items: ["Rectangle", "Round", "Square"],
    },
    {
        title: "Valves",
        items: ["Ball Valve", "Butterfly Valve", "Diaphram Valve", "Foot Valve", "Gate Valve", "Y Strainer", "Valves"],
    },
    {
        title: "Flanges",
        items: ["Flanges"],
    },
    {
        title: "Structural",
        items: ["Structural"],
    },
    {
        title: "Piping Accessories",
        items: ["Piping Accessories"],
    },
];

const productData = {
    "Buttwelded": [
        {
            name: "SS Pipe Nipple",
            size: '1/2" - 24"',
            material: "ASTM A106 Gr. B",
            pressure: "Class 150 - 2500",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878586/ss_pipe_nipple_powcpk_fs60bb.jpg",
        },
        {
            name: "SS Butwelded Fittings",
            size: '1/2" - 16"',
            material: "ASTM A335 P11/P22",
            pressure: "Class 150 - 2500",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878586/ss_butwelded_fittings_xzq3mj_pd5ym6.jpg",
        },
        {
            name: "Sockolet",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878584/sockolet_zug30m_r7ystl.jpg",
        },
        {
            name: "MS U Bend",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878583/ms_u_bend_viwdml_hwubm1.jpg",
        },
        {
            name: "MS Tee",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878582/ms_tee_rwikcn_t9r6y6.jpg",
        },
        {
            name: "MS Reducers",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878582/ms_reducers_w1zymy_jgeplc.jpg",
        },
        {
            name: "MS Long Bend",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878580/ms_long_bend_uytcte_ijnkvu.jpg",
        },
        {
            name: "MS Expansion Bend",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878579/ms_expansion_bend_f82iah_firtua.jpg",
        },
        {
            name: "MS Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878578/ms_elbow_plz2ka_aury8v.jpg",
        },
        {
            name: "MS Cap",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878577/ms_cap_kf3n37_bcwlcs.jpg",
        },
        {
            name: "MS 45 Degree Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878575/ms_45_degree_elbow_deon0u_tw8g76.jpg",
        },
        {
            name: "MS 1d Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878575/ms_1d_elbow_ikghtb_yb00wb.jpg",
        },
        {
            name: "Hot Dip Tee",
            img: "https://res.cloudinary.com/dfn1sw4if/image/upload/v1774857314/hot_dip_tee_ir0mdi.jpg",
        },
        {
            name: "Weldolet",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878587/weldolet_oebtcm_tikk6w.jpg",
        },
        {
            name: "Hot Dip Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878574/hot_dip_elbow_xt115z_i1ztnp.jpg",
        },
    ],

    "Forged Socketwelded": [
        {
            name: "SS Socketwelded Fittings",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878599/ss_socketwelded_fittings_qxecpd_wtyrn0.jpg",
        },
        {
            name: "MS Socket Weld Coupling",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878595/ms_socket_weld_coupling_eb8wgz_w51sqy.jpg",
        },
        {
            name: "MS Socketweld 45 Degreee Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878588/ms_socketweld_45_degreee_elbow_fxcsmf_mnrmvf.jpg",
        },
        {
            name: "MS Socketweld Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878593/ms_socketweld_elbow_arl89y_zikp8a.jpg",
        },
        {
            name: "MS Socketweld Tee",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878594/ms_socketweld_tee_epjjmy_hkk9yp.jpg",
        },
        {
            name: "Socketweld Fittings",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878597/socketweld_fittings_wjsd0f_pxudmu.jpg",
        },
    ],

    "Forged Threaded": [
        {
            name: "Screwed Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878619/screwed_elbow_xyzc6p_wxh9iu.jpg",
        },
        {
            name: "MS Cross Screwed",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878607/ms_cross_screwed_lrkxgt_bnpnqy.jpg",
        },
        {
            name: "MS and Gi Pipe Nipple",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878606/ms_and_gi_pipe_nipple_ivwbhd_xkgsgt.jpg",
        },
        {
            name: "Screwed Tee",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878624/screwed_tee_gybbac_hbydma.jpg",
        },
        {
            name: "Screwed Elbow 45 Degree",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878617/screwed_elbow_45_degree_whldjx_pzoyoz.jpg",
        },
        {
            name: "Threaded Hexagon Plug",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878629/threaded_hexagon_plug_zzfehb_qf64bc.jpg",
        },
        {
            name: "Screwed Reducing Coupling",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878623/screwed_reducing_coupling_k13qil_nktopo.jpg",
        },
        {
            name: "Threaded Bush",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878628/threaded_bush_dcbdwl_i0e3ap.jpg",
        },
        {
            name: "SS Screwed Fittings",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878626/ss_screwed_fittings_cqk1al_kqq2en.jpg",
        },
        {
            name: "Screwed Couping",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878616/screwed_couping_jd5oxd_bxnysb.jpg",
        },
        {
            name: "Reducing Hex Nipple",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878611/reducing_hex_nipple_a8vjvr_hxosrm.jpg",
        },
        {
            name: "NPT Coupling",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878610/npt_coupling_upqfov_sspjhk.jpg",
        },
        {
            name: "MS Thredaed Hose",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878609/ms_thredaed_hose_toybqp_utrbyx.jpg",
        },
        {
            name: "Male Female Elbow",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878603/male_female_elbow_jszvjy_xnfr7b.jpg",
        },
        {
            name: "Hex Nipple",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878601/hex_nipple_abgn1s_ai43xy.jpg",
        },
        {
            name: "Gi Fittings",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878600/gi_fittings_yv66gp_p2koaq.jpg",
        },
        {
            name: "Thredaed Plug",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878632/thredaed_plug_y5u5lb_wwqi50.jpg",
        },

    ],
    "Rectangle": [
        {
            name: "Rhs Pipe",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878633/rhs_pipe_aqpu00_vlpgjh.jpg",
        },
    ],
    "Round": [
        {
            name: "Gi Pipes",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878634/gi_pipes_faqi2l_elajum.jpg",
        },
        {
            name: "Gi Pipes Plain",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878638/gi_pipes_plain_gnvffa_if2dcm.jpg",
        },
        {
            name: "SS Pipes Round",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878647/ss_pipes_round_astx7k_ozf8qw.jpg",
        },
        {
            name: "Spiral Welded Pipes",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878645/spiral_welded_pipes_pvpi9z_pjp0mo.jpg",
        },
        {
            name: "Seamlessn Pipes",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878644/seamlessn_pipes_rmtxai_ytqqi5.jpg",
        },
        {
            name: "MS Pipes",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878640/ms_pipes_mf6msh_erfqdn.jpg",
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878650/WhatsApp_Image_2024-05-12_at_11.55.57_PM_cb6yw0_spfexv.jpg",
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878639/images_pyllgk_rvxssh.jpg",
        },
    ],
    "Square": [
        {
            name: "Shs Pipe",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878650/shs_pipe_td8x07_holcpq.jpg",
        },
    ],
    "Ball Valve": [
        {
            name: "Imported Brass Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878657/imported_brass_valve_rd0sat_sb1jsq.jpg",
        },
        {
            name: "Forged Flange Ball Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878653/forged_flange_ball_valve_nxlztu_ewucm4.jpg",
        },
        {
            name: "Forged Ball Valve 3pcs",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878651/forged_ball_valve3pcs_vqu3mo_jubjtu.jpg",
        },
        {
            name: "Zoloto Brass Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878658/zoloto_brass_valve_tza3xm_xeukw9.jpg",
        },
    ],
    "Butterfly Valve": [
        {
            name: "Butterfly Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878661/butterfly_valve_k760du_ayf86a.jpg",
        },
        {
            name: "Gear Type Butterfly Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878662/gear_type_butterfly_valve_vbqgev_nqed0q.jpg",
        },
    ],
    "Diaphram Valve": [
        {
            name: "Diaphram Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878663/diaphram_valve_ljickw_jwsuky.jpg",
        },
    ],
    "Foot Valve": [
        {
            name: "Foot Valve Flange Type",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878666/foot_valve_flange_type_ovhqxl_prvf9i.jpg",
        },
        {
            name: "Foot Valve Screwed Type",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878667/foot_valve_screwed_type_yecooi_mxolty.jpg",
        },
    ],
    "Gate Valve": [
        {
            name: "Gun Metal Gate Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878677/gun_metal_gate_valve_zl4xjp_nmww0e.jpg",
        },
        {
            name: "Forged Gate Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878673/forged_gate_valve_ga6ak5_qvet15.jpg",
        },
        {
            name: "Gate Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878676/gate_valve_lmypvg_t9fozl.jpg",
        },
        {
            name: "Forged Gate Valve Flange Type",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878671/forged_gate_valve_flange_type_wco8ae_tcntvu.jpg",
        },
    ],
    "Y Strainer": [
        {
            name: "CS Flange End Y Stariner",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878735/cs_flange_end_y_stariner_se2klx_ucnfpk.jpg",
        },
        {
            name: "CI Flange End Y Stariner",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878733/ci_flange_end_y_strainer_kecvsi_gkyxbd.jpg",
        },
        {
            name: "Screwed Y Strainer",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878738/screwed_y_strainer_gdhsjf_uqnaoi.jpg",
        },
        
    ],
    "Valves": [
        {
            name: "Forged nrv Screwed",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878688/forged_nrv_screwed_o1rljs_uea8ub.jpg",
        },
        {
            name: "Spring Loaded Safety Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878723/spring_loaded_safety_valve_atpfd9_qn6gju.jpg",
        },
        {
            name: "Type Strainer Flange End Dibgsm",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878727/type_strainer_flange_end_dibgsm_gcqbll.jpg",
        },
        {
            name: "Steam Traps Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878726/steam_traps_valve_khvzkw_emfimd.jpg",
        },
        {
            name: "Single Air Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878722/single_air_valve_zqlhcb_m2n7jb.jpg",
        },
        {
            name: "Sight Glass Indicator Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878718/sight_glass_indicator_valve_klorsv_uyrbhw.jpg",
        },
        {
            name: "Safety Valve Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878717/safety_valve_flange_xili06_ncbiiq.jpg",
        },
        {
            name: "Reflux Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878713/reflux_valve_t0nqik_isytz7.jpg",
        },
        {
            name: "Pressure Reducing Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878709/pressure_reducing_valve_fvilpf_gmvet3.jpg",
        },
        {
            name: "Pulp Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878712/pulp_valve_vnrcaw_rzbswn.jpg",
        },
        {
            name: "PP Foot Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878708/pp_foot_valve_lkd2bw_fbmi9t.jpg",
        },
        {
            name: "Nrv Flange Type",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878703/nrv_flange_type_g9osok_ahh6es.jpg",
        },
        {
            name: "Needle Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878702/needle_valve_vzq1pg_vsx4u7.jpg",
        },
        {
            name: "Nd 40 Globe Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878698/nd_40_globe_valve_mzypov_vugnvz.jpg",
        },
        {
            name: "Gun Metal Globe Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878697/gun_metal_globe_valve_lvl8ky_tieqqv.jpg",
        },
        {
            name: "Gun Metal Foot Valve Screwd",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878695/gun_metal_foot_valve_screwd_v7mr40_f7y72y.jpg",
        },
        {
            name: "Glove Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878691/glove_valve_gzbtum_cyyref.jpg",
        },
        {
            name: "Forged nrv Socketweld",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878690/forged_nrv_socketweld_gouopq_ob4nnx.jpg",
        },
        {
            name: "Dual Plate Check Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878685/dual_plate_check_valve_ishlqn_h6fyaw.jpg",
        },
        {
            name: "Brass Presure Reducing Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878682/brass_presure_reducing_valve_uwjgy9_ugxjrx.jpg",
        },
        {
            name: "Air Vent",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878682/air_vent_aqgm8a_i9f9uf.jpg",
        },
        {
            name: "Air Valve Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878678/air_valve_flange_zrysdj_dqnx2g.jpg",
        },
        {
            name: "Wafer Check Valve",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774878729/wafer_check_valve_yu1oci_qonwne.jpg",
        },
    ],
    "Flanges": [
        {
            name: "Asa Dummy Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881989/asa_dummy_flange_veyyc7.jpg",
        },
        {
            name: "Socket Weld Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881983/socket_weld_flange_bsgvkp.jpg",
        },
        {
            name: "Asa Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881979/asa_flange_isexwr.jpg",
        },
        {
            name: "WNRF Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881974/wnrf_flange_t3zeg4.jpg",
        },
        {
            name: "Hub Type Flange Sorf",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881969/hub_type_flange_sorf_cmvhaw.jpg",
        },
        {
            name: "Flanges",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881964/flanges_hcfqof.jpg",
        },
        {
            name: "Spectacle Blind Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881960/spectacle_blind_flange_bfq3zr.jpg",
        },
        {
            name: "Dummy British Standard",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881956/dummy_british_standard_lpgjn1.jpg",
        },
        {
            name: "Slipon Flanges",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881951/slipon_flanges_txgswv.jpg",
        },
        {
            name: "Screwed Flanges",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881947/screwed_flanges_se2voc.jpg",
        },
        {
            name: "RTJ Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881942/rtj_flange_bhsrck.jpg",
        },
        {
            name: "Orifice Flange",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774881941/orifice_flange_plyx6a.jpg",
        },
    ],
    "Structural": [
        {
            name: "I Beam",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882580/i_beam_blcaok.jpg",
        },
        {
            name: "Expansion Bellow Mettalic",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882574/expansion_bellow_mettalic_hgv7cj.jpg",
        },
        {
            name: "Chequered Plate",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882568/chequered_plate_vd2huc.jpg",
        },
        {
            name: "C Purlin Solar",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882563/c_purlin_solar_c1ahuf.jpg",
        },
        {
            name: "C Channel",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882557/c_channel_yo9ips.jpg",
        },
        {
            name: "Square Rod",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882552/square_rod_f9hbqf.jpg",
        },
        {
            name: "Round Rod",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882547/round_rod_xzv88g.jpg",
        },
        {
            name: "Perforated Sheet",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882542/perforated_sheet_wohpn4.jpg",
        },
        {
            name: "MS Angle",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882537/ms_angle_o9bmrq.jpg",
        },
        {
            name: "MS and SS Sheet",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882534/ms_and_ss_sheet_bpamlx.jpg",
        },
    ],
    "Piping Accessories": [
        {
            name: "MS and SS Bolt Nut",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882382/ms_and_ss_bolt_nut_c6rpw9.jpg",
        },
        {
            name: "Hitech Clamp",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882377/hitech_clamp_vlqpyq.jpg",
        },
        {
            name: "Fasteners",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882374/fasteners_ez1z7x.jpg",
        },
        {
            name: "U Clamp",
            img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774882370/u_clamp_jh7gju.jpg",
        },
    ],

};

function Products() {
    const [activeTab, setActiveTab] = useState("Buttwelded");

    const products = productData[activeTab] || [];

    return (
        <div className="bg-[#f5f6f8] min-h-screen">

            {/* HEADER */}
            <div className="bg-[#0f2a44] text-white pt-28 md:pt-32 py-10 md:py-12 text-center px-4">
                <h1 className="text-5xl font-bold">
                    Industrial Product Catalog
                </h1>
                <p className="mt-2">
                    Explore our comprehensive range of high-quality piping and fittings
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-5 p-4 md:p-8">

                {/* SIDEBAR */}
                <div className="w-full lg:w-1/4 bg-white rounded-xl shadow py-4 h-fit border overflow-x-auto">

                    {categories.map((cat, i) => (
                        <div key={i} className="mb-4">
                            <h2 className="font-bold text-lg text-gray-700 mb-1 px-4">
                                {cat.title}
                            </h2>

                            {cat.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveTab(item)}
                                    className={`cursor-pointer px-4 py-2 rounded-0 text-sm transition
                  ${activeTab === item
                                            ? "bg-gray-400 text-white"
                                            : "hover:bg-gray-100"
                                        }`}
                                >
                                    {item}
                                </div>

                            ))}
                            <hr></hr>

                        </div>

                    ))}


                </div>

                {/* PRODUCTS */}
                <div className="w-full lg:w-3/4">

                    <h2 className="text-2xl text-[#0f2a44] font-bold mb-4">
                        {activeTab}
                    </h2>

                    {products.length === 0 ? (
                        <p className="text-gray-500">No products available</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition flex flex-col"
                                >
                                    <img
                                        src={optimizeImage(product.img)}
                                        alt={product.name}
                                        className="w-full aspect-[4/3] object-contain rounded-lg"
                                        loading="lazy"
                                    />

                                    <div className="flex flex-col flex-grow gap-2">

                                        <h3 className="font-bold text-[#0f2a44] text-xl mt-2 line-clamp-2 min-h-[32px]">
                                            {product.name}
                                        </h3>

                                        {/* <p className="text-xs text-gray-700 mt-1">
                                            <span className="font-bold text-black">Size:</span> {product.size}
                                        </p>
                                        <p className="text-xs text-gray-700">
                                            <span className="font-bold text-black">Material:</span> {product.material}
                                        </p>
                                        <p className="text-xs text-gray-700">
                                            <span className="font-bold text-black">Pressure:</span> {product.pressure}
                                        </p> */}

                                        {/* Push buttons to bottom */}
                                        <div className="mt-auto">
                                            {/* <button className="bg-red-500 text-white text-xs sm:text-sm w-full py-2 rounded mt-2">
                                                Download Datasheet
                                            </button> */}

                                            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                                                <button className="border border-[#0f2a44] text-[#0f2a44] text-xs w-full py-2 rounded mt-2">
                                                    Inquire Now
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Products
<script setup>
    import './about-me.css';

    const jobTimeline = [
        {
            dateStart: "2023",
            dateEnd: "Now",
            company: "Boost IT",
            position: "Full-stack developer"
        },
        {
            dateStart: "2022",
            dateEnd: "2023",
            company: "Argo22",
            position: "Wordpress developer"
        },
        {
            dateStart: "2020",
            dateEnd: "2022",
            company: "Triton IT",
            position: "Web developer"
        },
        {
            dateStart: "2019",
            dateEnd: "2020",
            company: "Triton IT",
            position: "Junior web developer"
        }
    ];

    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const yearsOfExperience = currYear - 2019;
</script>


<template>
    <section id="about-me" class="about-me">
        <div class="max-w-container mx-auto px-8 lg:px-0">

            <!-- Upper info -->
            <div class="grid grid-cols-10 items-end">
                <div class="text lg:col-span-8 col-span-10 pe-0 lg:pe-20 mb-20 lg:mb-0">
                    <h2>
                        About me
                    </h2>
                    <div class="flex col-span-10 lg:col-span-7 flex-col gap-4">
                        <p>
                            I'm a Czech full-stack developer who builds fast, scalable, VIP-grade sites, combining solid back-end foundations with a strong passion for front-end craft and detail.
                            <br> </br>My dream project? One that’s technically interesting, actually gets used by real people, and deserves a proud spot on this portfolio.
                        </p>
                        
                        <p>
                            Offline mode: hiking, running, good tea, and occasional attempts at work-life balance.
                        </p>
                    </div>
                </div>
                <div class="numbers col-span-10 lg:col-span-2 flex flex-row lg:flex-col justify-between lg:items-end gap-5 lg:gap-8 ">
                    <p>
                        <span class="number">{{ yearsOfExperience }}+</span> <br>
                        Years of experience
                    </p>
        
                    <p>
                        <span class="number">100+</span> <br>
                        Projects contributed
                    </p>
                </div>
            </div>
    
            <!-- Experience timeline -->
            <dl class="timeline flex flex-col mt-20">
                <div v-for="job in jobTimeline" class="job">
                    <dt class="date-wrap">
                        <time datetime="2018">
                            {{ job.dateStart }}
                            <span class="mx-4">—</span>
                            {{ job.dateEnd }}
                        </time>
                    </dt>
                    <dd class="position-wrap">
                        <p class="company-name">
                            {{ job.position }}
                        </p>
                        <span class="job-position">
                            at {{ job.company }} 
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>
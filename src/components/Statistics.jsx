export const Statistics = ({title, stats }) => { 
    return (
                <section class="statistics">
            {title &&<h2 class="title">Upload stats</h2>}

                    <ul class="stat-list">
                        <li class="item">
                            <span class="label">.docx</span>
                            <span class="percentage">{stats[0].percentage}%</span>
                        </li>
                        <li class="item">
                            <span class="label">.mp3</span>
                            <span class="percentage">{stats[2].percentage}%</span>
                        </li>
                        <li class="item">
                            <span class="label">.pdf</span>
                            <span class="percentage">{stats[4].percentage}%</span>
                        </li>
                        <li class="item">
                            <span class="label">.mp4</span>
                            <span class="percentage">12%</span>
                        </li>
                    </ul>
                </section>
        
    )
}